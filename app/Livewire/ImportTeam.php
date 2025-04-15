<?php

namespace App\Livewire;

use App\Imports\TeamImport;
use App\Models\Employee;
use App\Models\LogImport;
use App\Models\Project;
use App\Models\TeamProject;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\Features\SupportFileUploads\WithFileUploads;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Str;

class ImportTeam extends Component
{
    use WithFileUploads;

    public $file;
    public $validatedData;
    public $previewData = [];
    public $validationErrors = [];
    public $code_project;


    public function preview()
    {
        $this->validate([
            'file' => 'required|file|mimes:xlsx,xls,csv',
        ]);

        $path = $this->file->store('temp');

        $import = new TeamImport($this->code_project, $this->file->getRealPath());
        Excel::import($import, $path);

        $this->validatedData = $import->rows;

        $this->validatePreviewData(); // Ini akan isi $this->previewData
    }

    public function validatePreviewData()
    {
        $this->validationErrors = [];

        $validatedData = [];

        foreach ($this->validatedData as $index => $row) {
            $rowErrors = [];

            if (empty($row['code_project'])) {
                $rowErrors['code_project'] = 'Code Project is required';
            } elseif (!Project::where('code_project', $row['code_project'])->exists()) {
                $rowErrors['code_project'] = 'Code Project is not registered';
            }

            if (empty($row['email'])) {
                $rowErrors['email'] = 'Email is required';
            } elseif (!Employee::where('email', $row['email'])->exists()) {
                $rowErrors['email'] = 'email is not registered';
            }

            if (empty($row['status'])) {
                $rowErrors['status'] = 'Status is required';
            } elseif (!in_array(strtolower($row['status']), ['active', 'inactive'])) {
                $rowErrors['status'] = 'Status harus active atau inactive';
            }

            $validatedData[] = [
                'code_project' => $row['code_project'] ?? null,
                'email' => $row['email'] ?? null,
                'status' => $row['status'] ?? null,
                'valid' => empty($rowErrors),
                'errors' => $rowErrors,
            ];
        }

        $this->previewData = $validatedData;
    }

    public function import()
    {
        try {
            $importedCount = 0;
            $skippedCount = 0;

            foreach ($this->previewData as $row) {
                if (!$row['valid']) {
                    $skippedCount++;
                    continue;
                }

                $employee = Employee::where('email', $row['email'])->first();
                if ($employee) {
                    TeamProject::updateOrCreate(
                        [
                            'id_employee' => $employee->id,
                            'code_project' => $row['code_project'],
                        ],
                        [
                            'status' => $row['status'],
                        ]
                    );
                    $importedCount++;
                } else {
                    $skippedCount++;
                    // Bisa juga ditambahkan log per baris atau ditandai di UI sebagai tidak ditemukan


                }
                LogImport::create([
                    'source_table' => 'team_project',
                    'filename' => $this->file->getClientOriginalName(),
                    'status' => 'success',
                    'user_id' => Auth::id(),
                    'message' => "Imported: $importedCount",
                    'imported_at' => now(),
                ]);
            }
            session()->flash('message', "Import berhasil. Data diimpor: $importedCount, dilewati: $skippedCount");
            $this->reset(['file', 'validatedData', 'previewData', 'validationErrors']);
        } catch (\Exception $e) {
            $errorMessage = $e->getMessage();
            if (Str::contains($errorMessage, 'Trying to get property')) {
                $message = 'Data karyawan tidak ditemukan (email tidak valid).';
            } elseif (Str::contains($errorMessage, 'Integrity constraint violation')) {
                $message = 'Data duplikat atau referensi tidak ditemukan.';
            } else {
                $message = 'Terjadi kesalahan saat mengimpor data.';
            }
            LogImport::create([
                'source_table' => 'team_project',
                'filename' => $this->file->getClientOriginalName(),
                'status' => 'failed',
                'user_id' => Auth::id(),
                'message' =>  $message,
                'imported_at' => now(),
            ]);
            session()->flash('error', 'Terjadi kesalahan saat import: ' . $e->getMessage());
        }
    }

    public function render()
    {
        return view('livewire.import-team');
    }
}
