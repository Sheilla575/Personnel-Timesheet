<?php

namespace App\Livewire;

use App\Imports\ActivityImport;
use App\Models\Activity;
use App\Models\Disciplin;
use Livewire\Component;
use Livewire\Features\SupportFileUploads\WithFileUploads;
use Maatwebsite\Excel\Facades\Excel;

class ImportActivity extends Component
{
    use WithFileUploads;

    public $file;
    public $previewData = [];
    public $validationErrors = [];

    protected $rules = [
        'file' => 'required|mimes:xlsx,csv,xls|max:2048',
    ];

    public function preview()
    {
        $this->validate([
            'file' => 'required|file|mimes:xlsx,xls,csv',
        ]);

        $import = new ActivityImport();
        Excel::import($import, $this->file);

        $this->previewData = $import->rows;

        $this->validatePreviewData();
    }

    public function validatePreviewData()
    {
        $this->validationErrors = [];

        foreach ($this->previewData as $index => $row) {
            $errors = [];

            // Misal struktur kolom: 0 => id, 1 => name, 2 => id_discipline
            if (empty($row['code_activity'])) {
                $errors[] = 'ID is required';
            } elseif (Activity::where('id', $row['code_activity'])->exists()) {
                $errors[] = 'Code Activity already exists';
            }

            if (empty($row['id_discipline']) || !Disciplin::where('id', $row['id_discipline'])->exists()) {
                $errors[] = 'Discipline ID invalid';
            }

            if (empty($row['name_activity'])) {
                $errors[] = 'Name is required';
            }

            if (!empty($errors)) {
                $this->validationErrors[$index] = $errors;
            }
        }
    }

    public function import()
    {
        foreach ($this->previewData as $index => $row) {
            if (!isset($this->validationErrors[$index])) {
                Activity::updateOrCreate(
                    ['id' => $row['code_activity']],
                    [
                        'id_disciplin' => $row['id_discipline'],
                        'name_activity' => $row['name_activity'],
                    ]
                );
            }
        }

        session()->flash('success', 'Import selesai');
        $this->reset(['file', 'previewData', 'validationErrors']);
    }

    public function render()
    {
        return view('livewire.import-activity');
    }
}
