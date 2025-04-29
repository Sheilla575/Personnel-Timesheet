<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\View;

class Disciplin extends Model
{
    protected $table = 'disciplins';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'id',
        'id_division',
        'disciplin_name',
        'assignment',
        'assignment_date'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($disciplin) {
            if (Disciplin::where('id', $disciplin->id)->exists()) {
                throw new ModelNotFoundException("Disciplin already exists '{$disciplin->id}'");
            }
        });
    }

    public function scopeSearch($query, $term)
    {
        return $query->when($term, function ($q) use ($term) {
            $q->where('disciplin_name', 'like', '%' . $term . '%')
                ->orWhere('id', 'like', '%' . $term . '%')
                ->orWhere('id_division', 'like', '%' . $term . '%')
                ->orWhere('assignment', 'like', '%' . $term . '%');
        });
    }

    public function division()
    {
        return $this->belongsTo(Division::class, 'id_division', 'id');
    }

    public function position()
    {
        return $this->hasMany(Position::class, 'id_diciplin', 'id');
    }

    public function assign()
    {
        return $this->belongsTo(User::class, 'email', 'email');
    }

    public function timesheet()
    {
        return $this->hasMany(Timesheet::class, 'code_project', 'id'); // the code_project in timesheet is the id in disciplin
    }

    public static function getIdDisciplineAttribute()
    {
        // Ambil entri terakhir berdasarkan kombinasi employee, week, dan year
        $discipline = self::orderBy('id', 'desc')->first(); // Ambil ID terakhir

        if ($discipline) {
            // Ambil nomor urut terakhir dengan explode karena panjang kode bisa berubah
            $lastNumber = (int) substr($discipline->id, 3);
            $newNumber = str_pad($lastNumber + 1, 2, '0', STR_PAD_LEFT);
        } else {
            // Jika tidak ada, mulai dari 0001
            $newNumber = "01";
        }

        // Format kode: TM-{employeeCode}-W{weekNumber}-{year}-{newNumber}
        return "HOD{$newNumber}";
    }
}
