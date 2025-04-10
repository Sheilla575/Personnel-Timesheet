<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
