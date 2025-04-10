<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'projects';
    protected $primaryKey = 'code_project';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'code_project',
        'name_project',
        'start_date',
        'end_date',
        'total_plan_manhours',
        'project_manager',
        'status'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($project) {
            if (Project::where('code_project', $project->id)->exists()) {
                throw new ModelNotFoundException("Code Project already exists '{$project->code_project}'");
            }
        });
    }

    public function employee()
    {
        return $this->hasOne(Employee::class, 'id', 'project_manager');
    }

    public function team()
    {
        return $this->hasMany(TeamProject::class, 'code_project', 'code_project');
    }

    public function timesheet()
    {
        return $this->hasMany(Timesheet::class, 'code_project', 'code_project');
    }
}
