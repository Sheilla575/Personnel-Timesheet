<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Division extends Model
{
    protected $table = 'divisions';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'id',
        'id_department',
        'division_name',
        'assignment',
        'assignment_date',
        'status'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($division) {
            if (Division::where('id', $division->id)->exists()) {
                throw new ModelNotFoundException("Division already exists '{$division->id}'");
            }
        });
    }

    public function department()
    {
        return $this->belongsTo(Department::class, 'id_department', 'id');
    }

    public function disciplin()
    {
        return $this->hasMany(Disciplin::class, 'id_division', 'id');
    }
}
