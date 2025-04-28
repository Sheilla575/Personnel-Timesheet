<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTimesheetRequest;
use App\Models\Activity;
use App\Models\Calendar;
use App\Models\Disciplin;
use App\Models\Employee;
use App\Models\Project;
use App\Models\TeamProject;
use App\Models\Timesheet;
use App\Models\TimesheetActivity;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TimesheetController extends Controller
{
    //
    public function workSheet()
    {
        // $timesheet = Timesheet::join('timesheet_activities', 'timesheets.id', '=', 'timesheet_activities.id_timesheet')
        // ->where('timesheets.year', $year)
        // ->where('timesheets.week', $weekNumber)
        // ->where('timesheets.id_employee', $id_employee)
        // ->get(['timesheets.*', 'timesheet_activities.*']);
        $user = Auth::guard('employee')->user();
        $projetUser = TeamProject::all();
        $projetPM = Project::all();
        $timesheet = Timesheet::where('id_employee', user()->id)->get();
        $activity = Activity::join('disciplins', 'activities.id_disciplin', '=', 'disciplins.id')
            ->join('positions', 'disciplins.id', '=', 'positions.id_disciplin')
            ->get([
                'activities.id as activity_id',
                'activities.name_activity as name_activity',
                'disciplins.id as disciplin_id',
                'positions.id as position_id',
            ]);
        $disciplin = Disciplin::join('positions', 'disciplins.id', '=', 'positions.id_disciplin')
            ->where('positions.id',  user()->id_position)
            ->get(['disciplins.*', 'positions.*']);
        return view('sheet', [
            'calendars' => Calendar::all(),
            'timesheet' => Timesheet::all(),
            'timesheetActivity' => TimesheetActivity::all(),
            'projetUser' => $projetUser,
            'projetPM' => $projetPM,
            'activity' => $activity,
            'disciplin' =>  $disciplin,
            'listproject' => Project::all()
        ]); // return view('timesheet/work-sheet');

    }

    // public function getWeekCalendar(Request $request)
    // {
    //     $weekNumber = $request->input('week_number');
    //     $year = $request->input('year', date('Y'));
    //     $id_employee =  user()->id;

    //     $timesheets = Timesheet::join('timesheet_activities', 'timesheets.id', '=', 'timesheet_activities.id_timesheet')
    //         ->where('timesheets.year', $year)
    //         ->where('timesheets.week', $weekNumber)
    //         ->get(['timesheets.*', 'timesheet_activities.*']);

    //     $weekDates = Calendar::getWeekDates($weekNumber, $year);

    //     return response()->json($weekDates);
    // }

    public function getWeekCalendar(Request $request)
    {
        $weekNumber = $request->input('week_number');
        $year = $request->input('year', date('Y'));
        // $id_employee = Auth::guard('employee')->id();
        $id_employee = user()->id;

        $weekDates = Calendar::getWeekDates($weekNumber, $year,);

        // Ambil 1 timesheet (jika ada)
        $timesheet = Timesheet::join('timesheet_activities', 'timesheets.id', '=', 'timesheet_activities.id_timesheet')
            ->where('timesheets.year', $year)
            ->where('timesheets.week', $weekNumber)
            ->where('timesheets.id_employee', $id_employee)
            ->get(['timesheets.*', 'timesheet_activities.*']);

        if (!$timesheet) {
            return response()->json([
                'date' => $weekDates,
                'year' => $year,
                'id_employee' => $id_employee,
                'activities' => [],
                'message' => 'No timesheet found for this week.',
            ]);
        }


        // // Ambil aktivitas dari tabel timesheet_activities
        // $activitiesRaw = TimesheetActivity::where('id_timesheet', $timesheet->id)->get();

        // // Kelompokkan berdasarkan kombinasi project + activity
        // $groupedActivities = $activitiesRaw->groupBy(function ($item) {
        //     return $item->code_project . '|' . $item->code_activity;
        // });

        $activities = [];

        if ($timesheet) {
            $grouped = $timesheet->groupBy(function ($item) {
                return $item->code_project . '|' . $item->code_activity;
            });

            foreach ($grouped as $key => $items) {
                $details = [];

                foreach ($items as $act) {
                    $details[$act->date] = [
                        'man_hours' => $act->hours,
                        'note' => $act->note,
                    ];
                }

                $activities[] = [
                    'code_project' => $items[0]->code_project,
                    'code_activity' => $items[0]->code_activity,
                    'status' => $items[0]->status,
                    'details' => $details
                ];
            }
        }


        return response()->json([
            'weekDates' => $weekDates,
            'year' => $year,
            'id_employee' => $id_employee,
            'status' => $activities[0]['status'] ?? 'new', // Tidak ada timesheet = baru
            'activities' => $activities,
            'message' => $timesheet ? 'Timesheet found.' : 'No timesheet found for this week.',
        ]);
    }


    public function draft_timesheet(StoreTimesheetRequest $request) //StoreTimesheetRequest
    {
        DB::beginTransaction();
        try {

            $id_employee = $request->input('id_employee');
            $week = $request->input('week');
            $year = $request->input('year');
            $action = $request->input('action'); // ambil dari tombol
            $status = $action === 'pending' ? 'Pending' : 'Draft';
            // dd($request);
            $timesheetActivities  = [];
            $Timesheet = [];

            foreach ($request->activities as $rowId => $activities) {

                $timesheetCode = Timesheet::generateTimesheetCode($id_employee, $week, $year);

                $Timesheet = Timesheet::firstOrNew([
                    'id_employee' => "EP001",
                    'week' => $week,
                    'year' => $year,
                    'code_project' => $activities['code_project'],
                    'code_activity' => $activities['code_activity'],
                ]);
                // Set ID hanya jika Timesheet baru
                if (!$Timesheet->exists) {
                    $Timesheet->id = $timesheetCode++;
                }

                // Set/update status
                $Timesheet->status = $status;

                // Save (baik new atau update)
                $Timesheet->save();

                $Timesheets[] = $Timesheet;
                foreach ($request->activities[$rowId] as $manhour) {

                    // $idTimesheetActivity = TimesheetActivity::generateTimesheetActivity();

                    if (!empty($manhour['date'])) {
                        $timesheetActivities[$rowId][] =  TimesheetActivity::updateOrCreate([
                            // 'id' => $idTimesheetActivity++,
                            'id_timesheet' => $Timesheet->id,
                            'date' => $manhour['date'] ?? null,
                        ], [
                            'hours' => $manhour['man_hours'] ?? 0,
                            'note' => $manhour['note'] ?? 'null',
                        ]);
                    }
                }
            }
            DB::commit();
            return redirect()->back()->with('success', 'Timesheet created successfully');
            // return response()->json([
            //     'success' => true,
            //     'message' => 'Timesheet created successfully',
            // ]);
        } catch (\Exception $e) {
            DB::rollBack();
            dd($e->getMessage());
            return redirect()->back()->with('error',  $e->getMessage());
            // return response()->json([
            //     'success' => false,
            //     'message' => $e->getMessage(),
            // ], 500);
        }
    }



    public function submit_timesheet(Request $request) {}
}
