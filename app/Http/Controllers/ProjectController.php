<?php

namespace App\Http\Controllers;

use App\Exports\TeamTemplateExport;
use App\Models\Disciplin;
use App\Models\Employee;
use App\Models\Project;
use App\Models\TimesheetActivity;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ProjectController extends Controller
{
    //

    public function index()
    {
        $projects = Project::all();
        return view('listproject', [
            'title' => 'Project',
            'listproject' => $projects
        ]);
    }

    public function setting_Project(Request $request)
    {
        $code_project = $request->code_project;
        $project = Project::where('code_project', $code_project)->first();
        // if ($project) {
        //     return response()->json(['success' => true, 'data' => $project]);
        // } else {
        //     return response()->json(['success' => false, 'message' => 'Project not found']);
        // }
        $selectedWeek = now()->week();
        return view('detailproject', [
            'title' =>  $project->name_project,
            'project' => $project,
            'team' => $project->teamproject,
            'timesheet' => $project->timesheet()->where('status', 'Pending')->get(),
            'timesheetactivity' => TimesheetActivity::orderBy('date')->get(),
            'employee' => Employee::all(),
            'selectedWeek' => $selectedWeek
        ]);
    }

    public function downloadTemplateTeamProject()
    {
        return Excel::download(new TeamTemplateExport, 'Team Project-template.xlsx');
    }

    public function add_team(Request $request)
    {
        $project = Project::where('code_project', $request->code_project)->first();
        $project->team()->attach($request->id_employePe);
        return redirect()->back()->with('success', 'Team added successfully');
    }


    public function index_Discipline($id)
    {
        $disciplin = Disciplin::find($id);
        $employee = Employee::join('positions', 'employees.id_position', '=', 'positions.id')
            ->join('disciplins', 'positions.id_disciplin', '=', 'disciplins.id')
            ->where('disciplins.id', '=', $disciplin->id)
            ->get();
        return view('page_discipline', [
            'title' =>  $disciplin->disciplin_name,
            'listdisciplin' => $disciplin,
            'employee' => $employee,
        ]);
    }
}
