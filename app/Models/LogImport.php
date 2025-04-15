<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LogImport extends Model
{
    use HasFactory;

    protected $fillable = ['source_table', 'filename', 'status', 'user_id', 'message', 'imported_at'];

    public function getImportedByAttribute()
    {
        // Cek apakah ID-nya mirip ID karyawan
        if (str_starts_with($this->user_id, 'EP00')) {
            return Employee::where('id', $this->user_id)->first();
        }

        // Kalau bukan, anggap ID user biasa
        return User::where('id', $this->user_id)->first();
    }

    public function getImportedByNameAttribute()
    {
        return $this->imported_by->name ?? 'Unknown';
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? false, function ($query, $search) {
            $query->where('filename', 'like', '%' . $search . '%')
                ->orWhere('source_table', 'like', '%' . $search . '%');
        });
    }
    public function scopeFilterDate($query, array $filters)
    {
        $query->when($filters['start_date'] ?? false, function ($query, $start_date) {
            $query->where('imported_at', '>=', $start_date);
        })->when($filters['end_date'] ?? false, function ($query, $end_date) {
            $query->where('imported_at', '<=', $end_date);
        });
    }
    public function scopeFilterStatus($query, array $filters)
    {
        $query->when($filters['status'] ?? false, function ($query, $status) {
            $query->where('status', 'like', '%' . $status . '%');
        });
    }
    public function scopeFilterSource($query, array $filters)
    {
        $query->when($filters['source'] ?? false, function ($query, $source) {
            $query->where('source_table', 'like', '%' . $source . '%');
        });
    }
    public function scopeFilterUser($query, array $filters)
    {
        $query->when($filters['user'] ?? false, function ($query, $user) {
            $query->where('user_id', 'like', '%' . $user . '%');
        });
    }
}
