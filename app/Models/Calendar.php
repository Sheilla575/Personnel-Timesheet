<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calendar extends Model
{
    use HasFactory;

    protected $table = 'calendars';
    protected $fillable = ['date', 'is_holiday', 'is_editable', 'agenda', 'note', 'Bonus_Manhours'];

    public static function getWeekDates($weekNumber, $year = null)
    {
        $year = $year ?? date('Y');
        $startDate = Carbon::now()->setISODate($year, $weekNumber)->startOfWeek();
        $endDate = $startDate->copy()->endOfWeek();

        $calandar = Calendar::whereBetween('date', [$startDate, $endDate])->get()->KeyBy('date');
        // dd($calandar);
        return collect(range(0, 6))->map(function ($i) use ($startDate, $calandar) {
            $date = $startDate->copy()->addDays($i)->format('Y-m-d');

            $calandarEntery = $calandar[$date] ?? null;

            return [
                'date' => $date,
                'is_holiday' => $calandarEntery ? $calandarEntery->is_holiday : false,
                'is_editable' => $calandarEntery ? $calandarEntery->is_editable : true,
                'agenda' => $calandarEntery->agenda ?? null,
                'Bonus_Manhours' => $calandarEntery ? $calandarEntery->Bonus_Manhours : null
            ];
        });
    }
}
