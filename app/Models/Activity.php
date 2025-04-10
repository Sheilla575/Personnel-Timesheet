<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $table = 'activities';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'id',
        'id_disciplin',
        'name_activity',
    ];

    public function disciplin()
    {
        return $this->belongsTo(Disciplin::class, 'id_disciplin', 'id');
    }
}
