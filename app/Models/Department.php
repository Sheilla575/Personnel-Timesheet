<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class Department extends Model
{
    protected $table = 'departments';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'id',
        'department_name',
        'assignment',
        'assignment_date',
        'status'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($department) {
            if (Department::where('id', $department->id)->exists()) {
                throw new ModelNotFoundException("Department already exists '{$department->id}'");
            }
        });
    }

    public function division()
    {
        return $this->hasmany(Division::class, 'id_department', 'id');
    }

    public static function getIdDepartmentAttribute()
    {
        // Ambil entri terakhir berdasarkan kombinasi employee, week, dan year
        $department = self::orderBy('id', 'desc')->first(); // Ambil ID terakhir

        if ($department) {
            // Ambil nomor urut terakhir dengan explode karena panjang kode bisa berubah
            $lastNumber = (int) substr($department->id, 2);
            $newNumber = str_pad($lastNumber + 1, 2, '0', STR_PAD_LEFT);
        } else {
            // Jika tidak ada, mulai dari 0001
            $newNumber = "01";
        }

        // Format kode: TM-{employeeCode}-W{weekNumber}-{year}-{newNumber}
        return "DP{$newNumber}";
    }
}
