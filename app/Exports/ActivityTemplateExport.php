<?php

namespace App\Exports;

use App\Models\Activity;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ActivityTemplateExport implements WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */

    // public function collection()
    // {
    //     return Activity::all();
    // }

    public function array(): array
    {
        return [
            ['PM-PMT-CE', 'PMT', 'Cost Estimate'],
            ['PF-DB-02', 'HOD01', 'Utilities & Offsite System Description'],
        ];
    }

    public function headings(): array
    {
        return ['code_activity', 'id_discipline', 'name_activity'];
    }
}
