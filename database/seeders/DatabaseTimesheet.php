<?php

namespace Database\Seeders;

use App\Models\Calendar;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseTimesheet extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $agenda =
            [
                [
                    'agenda' => 'Idul Firti',
                    'date' => '2025-03-31',
                    'is_holiday' => true,
                    'is_editable' => true,
                    'Bonus_Manhours' => '0',
                    'note' => 'Hari Raya Idul Fitri ke-1'
                ],
                [
                    'agenda' => 'Idul Firti',
                    'date' => '2025-04-01',
                    'is_holiday' => true,
                    'is_editable' => false,
                    'Bonus_Manhours' => '8',
                    'note' => 'Hari Raya Idul Fitri ke-2'
                ],
                [
                    'agenda' => 'Cuti Bersama',
                    'date' => '2025-04-02',
                    'is_holiday' => false,
                    'is_editable' => true,
                    'Bonus_Manhours' => '0',
                    'note' => 'Pengisian dapat dilakukan untuk yang mendapat jadwal piket'
                ],
                [
                    'agenda' => 'Cuti Bersama',
                    'date' => '2025-04-03',
                    'is_holiday' => false,
                    'is_editable' => true,
                    'Bonus_Manhours' => '0',
                    'note' => 'Pengisian dapat dilakukan untuk yang mendapat jadwal piket'
                ],
                [
                    'agenda' => 'Cuti Bersama',
                    'date' => '2025-04-04',
                    'is_holiday' => false,
                    'is_editable' => true,
                    'Bonus_Manhours' => '0',
                    'note' => 'Pengisian dapat dilakukan untuk yang mendapat jadwal piket'
                ],
            ];
        foreach ($agenda as $a) {
            Calendar::create($a);
        }
    }
}
