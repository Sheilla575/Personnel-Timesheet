<?php

namespace App\Imports;

use App\Models\Activity;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ActivityImport implements ToCollection, WithHeadingRow
{

    public $rows;

    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            $this->rows[] = [
                'code_activity' => $row['code_activity'] ?? null,
                'id_discipline' => $row['id_discipline'] ?? null,
                'name_activity' => $row['name_activity'] ?? null,
            ];
        }
    }
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        return new Activity([
            'id' => $row[0],
            'id_disciplin' => $row[1],
            'name_activity' => $row[2],
        ]);
    }

    // public $rows;

    // public function collection(Collection $collection)
    // {
    //     $this->rows = $collection;
    // }
}
