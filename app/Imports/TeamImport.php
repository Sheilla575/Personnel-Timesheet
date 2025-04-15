<?php

namespace App\Imports;

use App\Models\Employee;
use App\Models\TeamProject;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class TeamImport implements ToCollection, WithHeadingRow
{
    public $rows = [];
    protected $code_project;

    public function __construct($code_project, $row)
    {
        $this->code_project = $code_project;
    }

    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            // $employee = Employee::where('email', $row['email'])->first();
            $this->rows[] = [
                'code_project' => $row['code_project'] ?? null,
                'email' =>  $row['email'] ?? null,
                'status' => $row['status'] ?? null,
            ];
            // if ($employee) {
            // } else {
            //     // Handle the case where the employee is not found
            //     session()->flush('error', 'Employee not found for email: ' . $row['email']);

            //     // Log::error('Employee not found for email: ' . $row['email']);
            //     // throw new \Exception('Employee not found for email: ' . $row['email']);
            // }
        }
    }

    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */

    public function model(array $row)
    {
        return new TeamProject([
            'code_project' => $row[0],
            'id_employee' => $row[1],
            'status' => $row[2],
        ]);
    }


    // Update or create the TeamProject record
    // TeamProject::updateOrCreate(
    //     [
    //         'id_employee' => $employee->id,
    //         'code_project' => $row['code_project'],
    //     ],
    //     [
    //         'status' => $row['status'],
    //     ]
    // );
}
