<?php

namespace App\Exports;

use App\Models\TeamProject;
use Maatwebsite\Excel\Concerns\FromCollection;

class TeamTemplateExport implements FromCollection
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return collect([
            [
                'code_project' => 'Code Project',
                'email' => 'Email',
                'status' => 'Status',
            ],
        ]);
    }

    public function headings(): array
    {
        return [
            'code_project',
            'email',
            'Status',
        ];
    }
}
