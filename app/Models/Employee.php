<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Employee extends Authenticatable
{
    protected $table = 'employees';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'id',
        'id_position',
        'name',
        'email',
        'type_user',
        'level_roles',
        'password'
    ];

    // protected static function boot()
    // {
    //     parent::boot();

    //     static::creating(function ($employee) {
    //         if (Employee::where('id', $employee->id)->exists()) {
    //             throw new ModelNotFoundException("Id Employee already exists '{$employee->id}'");
    //         }
    //     });
    // }

    public static function getIdEmployeeAttribute()
    {
        // Ambil entri terakhir berdasarkan kombinasi employee, week, dan year
        $employee = self::orderBy('id', 'desc')->first(); // Ambil ID terakhir


        if ($employee) {
            // Ambil nomor urut terakhir dengan explode karena panjang kode bisa berubah
            $lastNumber = (int) substr($employee->id, 3);
            $newNumber = str_pad($lastNumber + 1, 3, '0', STR_PAD_LEFT);
        } else {
            // Jika tidak ada, mulai dari 0001
            $newNumber = "001";
        }

        // Format kode: TM-{employeeCode}-W{weekNumber}-{year}-{newNumber}
        return "EP{$newNumber}";
    }

    public function position()
    {
        return $this->belongsTo(Position::class, 'id_position', 'id');
    }

    public function project()
    {
        return $this->hasOne(Project::class, 'project_manager', 'id');
    }

    public function role()
    {
        return $this->belongsTo(Role::class, 'level_roles', 'id');
    }

    public function team()
    {
        return $this->hasMany(TeamProject::class, 'id_employee', 'id');
    }
}
