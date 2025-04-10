<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = [
        'id',
        'roles_name',
        'level_roles',
    ];

    public function employee()
    {
        return $this->hasMany(Employee::class, 'level_roles', 'id');
    }
    public function user()
    {
        return $this->hasMany(User::class, 'level_roles', 'id');
    }
}
