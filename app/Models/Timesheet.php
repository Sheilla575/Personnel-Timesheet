<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Timesheet extends Model
{
    use HasFactory;

    protected $table = 'timesheets';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'id',
        'id_employee',
        'week',
        'year',
        'code_project',
        'code_activity',
        'status'
    ];

    // protected static function boot()
    // {
    //     parent::boot();

    //     static::creating(function ($timesheet) {
    //         if (!$timesheet->id) {
    //             $randomNumber = mt_rand(100000, 999999);
    //             $timesheet->id = "TM$randomNumber";
    //         }
    //     });
    // }
    public static function generateTimesheetCode($employeeCode, $weekNumber, $year)
    {
        // Ambil entri terakhir berdasarkan kombinasi employee, week, dan year
        $lastTimesheet = self::where('id_employee', $employeeCode)
            ->where('week', $weekNumber)
            ->where('year', $year)
            ->orderBy('id', 'desc') // Ambil ID terakhir
            ->first();

        if ($lastTimesheet) {
            // Ambil nomor urut terakhir dengan explode karena panjang kode bisa berubah
            $lastNumber = (int) substr($lastTimesheet->id, -4);
            $newNumber = str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
        } else {
            // Jika tidak ada, mulai dari 0001
            $newNumber = "0001";
        }

        // Format kode: TM-{employeeCode}-W{weekNumber}-{year}-{newNumber}
        return "TM-{$employeeCode}-W{$weekNumber}-{$year}-{$newNumber}";
    }

    public function project()
    {
        return $this->belongsTo(Project::class, 'code_project', 'code_project');
    }

    public function discipline()
    {
        return $this->belongsTo(Disciplin::class, 'code_project', 'id'); // Assuming 'code_project' is the foreign key in the 'disciplin' table
    }

    public function activity()
    {
        return $this->belongsTo(Activity::class, 'code_activity', 'id');
    }

    public function timsheetactivity()
    {
        return $this->hasMany(TimesheetActivity::class, 'id_timesheet', 'id');
    }
}
