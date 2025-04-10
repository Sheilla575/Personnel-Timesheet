<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimesheetActivity extends Model
{
    use HasFactory;
    protected $table = 'timesheet_activities';
    // protected $primaryKey = 'id';
    // public $incrementing = false;
    // protected $keyType = 'string';
    protected $fillable = [
        'id',
        'id_timesheet',
        'date',
        'hours',
        'note',
    ];

    // public static function generateTimesheetActivity()
    // {
    //     // Ambil ID terakhir dari database yang diawali dengan "TM"
    //     $lastTimesheet = self::where('id', 'LIKE', 'TM%')->orderBy('id', 'desc')->first();

    //     if (!$lastTimesheet) {
    //         // Jika tidak ada data, mulai dari TM0001
    //         return 'TM0001';
    //     }

    //     // Ambil angka dari ID terakhir (misal: dari TM0012 menjadi 12)
    //     $lastNumber = (int) substr($lastTimesheet->id, 2);

    //     // Tambahkan 1 ke nomor terakhir
    //     $newNumber = $lastNumber + 1;

    //     // Format angka menjadi 4 digit (misal: 0001, 0012, 1023)
    //     return 'TM' . str_pad($newNumber, 4, '0', STR_PAD_LEFT);
    // }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($timesheet) {
            if (!$timesheet->id) {
                $randomNumber = mt_rand(100000, 999999);
                $timesheet->id = "TM$randomNumber";
            }
        });
    }

    public function timsheet()
    {
        return $this->belongsTo(Timesheet::class, 'id_timesheet', 'id');
    }
}
