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
}
