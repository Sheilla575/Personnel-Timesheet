<?php

namespace App\Livewire;

use App\Models\Activity;
use App\Models\Calendar;
use App\Models\Employee;
use App\Models\TeamProject;
use App\Models\Timesheet;
use Livewire\Component;
use Psy\CodeCleaner\FunctionContextPass;

class ReportManhours extends Component
{
    public $week;
    public $weekDates = [];
    public $codeProject;
    public $teamProjects = [];
    public $activities = [];
    public $dates = [];
    public $year;

    protected $listeners = [
        'refreshData' => 'updateDataFromInput',
    ];

    public function mount($year = null, $week = null, $codeProject = null)
    {
        $year = $this->week;
        $weekNumber = $this->week;

        $this->year = $year;
        $this->codeProject = $codeProject;
        $this->getManhoursTeam($year, $weekNumber, $codeProject);
    }

    public function updatedWeek($value)
    {
        if ($this->week) {
            $year = \Carbon\Carbon::parse($value)->year;
            $weekNumber = \Carbon\Carbon::parse($value)->isoWeek;

            $this->year = $year;
            $this->getManhoursTeam($year, $weekNumber, $this->codeProject);
        }
    }

    // public function updateWeek($week)
    // {
    //     $this->loadData();
    // }

    // public function loadData()
    // {
    //     $this->teamProjects = TeamProject::with([
    //         'employees',
    //         'timesheets' => function ($query) {
    //             $query->where('week', $this->week)
    //                 ->where('code_project', $this->codeProject)
    //                 ->with(['timesheet_activities' => function ($q) {
    //                     $q->orderBy('date');
    //                 }]);
    //         }
    //     ])->where('code_project', $this->codeProject)->get();

    //     $this->dates = Timesheet::where('week', $this->week)
    //         ->where('code_project', $this->codeProject)
    //         ->distinct()
    //         ->orderBy('date')
    //         ->pluck('date');
    // }
    public function getManhoursTeam($year, $weekNumber, $codeProject)
    {
        $this->week = $weekNumber;
        $this->year = $year;
        $this->codeProject = $codeProject;

        $this->weekDates = Calendar::getWeekDates($weekNumber, $year);

        $employeeIds = TeamProject::where('code_project', $codeProject)
            ->pluck('id_employee');

        // Ambil ]data timesheet - timesheet activity
        $timesheet = Timesheet::join('timesheet_activities', 'timesheets.id', '=', 'timesheet_activities.id_timesheet')
            ->where('timesheets.year', $year)
            ->where('timesheets.week', $weekNumber)
            ->where('timesheets.code_project', $codeProject)
            ->whereIn('timesheets.id_employee', $employeeIds)
            ->get(['timesheets.*', 'timesheet_activities.*']);


        $activities = [];

        if ($timesheet) {


            $grouped = $timesheet->groupBy(function ($item) {
                return $item->id_employee . '|' . $item->code_activity;
            });

            foreach ($grouped as $key => $items) {
                [$idEmployee, $activityCode] = explode('|', $key);

                $employee = Employee::where('id', $idEmployee)->first();
                $activity  = Activity::where('id', $activityCode)->first();
                $details = [];

                foreach ($items as $act) {
                    $details[$act->date] = [
                        'man_hours' => $act->hours,
                        'note' => $act->note,
                    ];
                }

                $activities[] = [
                    'employee' => $employee,
                    'code_activity' => $activity,
                    'details' => $details
                ];

                // $activities[] = [
                //     'id_employee' =>  $items[0]->id_employee,
                //     'code_project' => $items[0]->code_project,
                //     'code_activity' => $items[0]->code_activity,
                //     'status' => $items[0]->status,
                //     'details' => $details
                // ];
            }
        }
        $this->activities = $activities;
    }

    public function render()
    {
        return view('livewire.report-manhours');
    }
}
