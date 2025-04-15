<?php

namespace App\Http\Requests;

use App\Models\Timesheet;
use Illuminate\Foundation\Http\FormRequest;

class StoreTimesheetRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id_employee' => 'required',
            'week'   => 'required',
            'year'          => 'required|integer',
            'activities.*.code_project' => 'required|exists:projects,code_project',
            'activities.*.code_activity' => 'required|exists:activities,id',
            // 'activities.*.*.date'   => 'required|date',
            'activities.*.*.man_hours' => 'nullable|',
            'activities.*.*.note'   => 'nullable|string|max:255',
        ];
    }
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $activities = $this->input('activities');
            $id_employee = $this->input('id_employee');
            $week = $this->input('week');
            $year = $this->input('year');

            $projectActivityMap = [];
            $combinationCheck = [];
            foreach ($activities as $rowId => $data) {
                $project = $data['code_project'] ?? null;
                $activity = $data['code_activity'] ?? null;

                // Jika dalam satu project ada activity yang sama, tambahkan error
                // if (!isset($projectActivityMap[$project])) {
                //     $projectActivityMap[$project] = [];
                // }
                // Cek kombinasi duplicate
                $comboKey = $project . '-' . $activity;
                // if (in_array($activity, $projectActivityMap[$project])) {
                //     $validator->errors()->add("activities.{$rowId}.code_activity", "Activity '$activity' sudah ada dalam project '$project'. Pilih activity lain.");
                // } else {
                //     $projectActivityMap[$project][] = $activity;
                // }

                if (!$project || !$activity) {
                    $validator->errors()->add("activities.{$rowId}.code_project", "Project atau Activity tidak boleh kosong.");
                }

                if (in_array($comboKey, $combinationCheck)) {
                    $validator->errors()->add("activities.{$rowId}.code_activity", "Aktivitas untuk proyek ini sudah diisi.");
                }

                $combinationCheck[] = $comboKey;

                $exists = Timesheet::where('code_project', $project)
                    ->where('code_activity', $activity)
                    ->where('id_employee', $this->input('id_employee'))
                    ->where('week', $this->input('week'))
                    ->where('year', $this->input('year'))
                    ->where('status', '!=', 'Draft') // Jangan validasi kalau status draft
                    ->exists();

                if ($exists) {
                    $validator->errors()->add("activities.{$rowId}.code_activity", "Activity '$activity' sudah terdaftar sebelumnya untuk project '$project' di minggu ke-$week.");
                }
            }
        });
    }
}
