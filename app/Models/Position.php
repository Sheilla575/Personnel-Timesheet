<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    protected $table = 'positions';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'id',
        'id_disciplin',
        'positions_name',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($position) {
            if (Position::where('id', $position->id)->exists()) {
                throw new ModelNotFoundException("Position already exists '{$position->id}'");
            }
        });
    }

    public function scopeSearch($query, $term)
    {
        return $query->when($term, function ($q) use ($term) {
            $q->where('positions_name', 'like', '%' . $term . '%')
                ->orWhere('id', 'like', '%' . $term . '%')
                ->orWhere('id_disciplin', 'like', '%' . $term . '%');
        });
    }

    public function disciplin()
    {
        return $this->belongsTo(Disciplin::class, 'id_disciplin', 'id');
    }

    public function employee()
    {
        return $this->hasMany(Employee::class, 'id', 'id_position');
    }
}
