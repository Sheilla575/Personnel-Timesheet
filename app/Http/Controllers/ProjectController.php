<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\TimesheetActivity;
use Illuminate\Http\Request;

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
        return view('detailproject', [
            'title' =>  $project->name_project,
            'project' => $project,
            'team' => $project->team,
            'timesheet' => $project->timesheet,
            'timesheetactivity' => TimesheetActivity::all()
        ]);
    }
}
