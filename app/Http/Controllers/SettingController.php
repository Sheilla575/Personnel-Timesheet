<?php

namespace App\Http\Controllers;

use App\Exports\ActivityTemplateExport;
use App\Models\Activity;
use App\Models\Calendar;
use App\Models\Department;
use App\Models\Disciplin;
use App\Models\Division;
use App\Models\Employee;
use App\Models\LogImport;
use App\Models\Position;
use App\Models\Project;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class SettingController extends Controller
{
    public function index(Request $request)
    {
        $pagination = 20;
        $disciplin = Disciplin::search($request->search)->paginate($pagination);
        $activity = Activity::search($request->search)->paginate($pagination);
        $position = Position::search($request->search)->paginate($pagination);
        return view('settings', [
            'title' => 'Settings',
            'division' => Division::all(),
            'department' => Department::all(),
            'disciplin' => $disciplin,
            'activity' => $activity,
            'position' =>  $position,
            'listproject' => Project::all(),
            'employee' => Employee::all(),
            'users' => User::all(),
            'list_discipline' => Disciplin::all()
        ]);
    }

    //============================================================\\
    //============================================================\\
    // Resource user
    public function index_users()
    {

        return view('page_user', [
            'title' => 'Data User Employee',
            'users' => User::all(),
            'employee' => Employee::all(),
            'roles' => Role::all(),
            'position' => Position::all(),
        ]);
    }

    public function store_user(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
        ]);
        // dd($request);
        if ($request->id_position == 0) {
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'level_roles' => $request->level_roles,
                'type_user' => $request->type_user,
            ]);
        } else {
            $id_employee = Employee::getIdEmployeeAttribute();

            Employee::create([
                'id' => $id_employee,
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'level_roles' => $request->level_roles,
                'id_position' => $request->id_position,
                'type_user' => $request->type_user,
            ]);
        }

        return redirect()->back()->with('success', 'User created successfully.');
    }

    public function update_user(Request $request, $id)
    {

        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'level_roles' => 'required',
            'type_user' => 'required',
        ]);
        $user = User::find($id);
        // Simpan data user ke database
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'level_roles' => $request->level_roles,
            'type_user' => $request->type_user,
        ]);

        return redirect()->back()->with('success', 'User berhasil ditambahkan.');
    }

    public function destroy_user($id)
    {
        $user = User::find($id);

        if (!$user->delete()) {
            return redirect()->back()->with(['success', 'Data permanently deleted!!']);
        } else {
            $user->forceDelete();
            return redirect()->back()->with(['error', 'Data Gagal Dihapus']);
        }
    }
    // End Resource user
    //============================================================\\
    //============================================================
    public function storeDepartment(Request $request) {} //setting division
    public function storeDivision(Request $request) {} // seting for disciplin
    //============================================================\\
    //============================================================
    // Resource Disciplin
    public function assign_HOD(Request $request, $id)
    {
        $disciplin = Disciplin::find($id);
        // dd($disciplin);
        $request->validate([
            'disciplin_name' => 'required',
            'id_division' => 'required',
            'assignment' =>  'nullable|',
            'assignment_date' => 'nullable|date',
        ]);
        $disciplin->update([
            'disciplin_name' => $request->disciplin_name,
            'id_division' => $request->id_division,
            'assignment' => $request->assignment,
            'assignment_date' => $request->assignment_date,
        ]);
        return redirect()->back()->with('success', 'HOD assigned successfully.');
    }

    // End Resource Disciplin
    //============================================================\\
    //============================================================
    // Resource Position

    public function store_Position(Request $request)
    {
        try {
            $request->validate([
                'id' => 'required|unique:positions,id',
                'id_disciplin' => 'required',
                'positions_name' => 'required',
            ]);
            Position::create([
                'id' => $request->id,
                'id_disciplin' => $request->id_disciplin,
                'positions_name' => $request->positions_name,
            ]);
            return redirect()->back()->with('success', 'Position created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', $e->getMessage());
        }
    }

    public function update_Position(Request $request, $id)
    {
        try {
            $request->validate([
                'id' => 'required',
                'id_disciplin' => 'required',
                'positions_name' => 'required',
            ]);

            $position = Position::find($id);
            // dd($position);
            $position->update([
                'id' => $request->id,
                'id_disciplin' => $request->id_disciplin,
                'positions_name' => $request->positions_name,
            ]);
            return redirect()->back()->with('success', 'Position updated successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', $e->getMessage());
        }
    }

    public function destroy_Position($id)
    {
        $position = Position::find($id);
        if (!$position->delete()) {
            return redirect()->back()->with(['success', 'Data permanently deleted!!']);
        } else {
            $position->forceDelete();
            return redirect()->back()->with(['error', 'Data Gagal Dihapus']);
        }
    }
    // End Resource Position
    //============================================================\\
    //============================================================\\
    // Resource Activity
    public function downloadTemplateActivity()
    {
        return Excel::download(new ActivityTemplateExport, 'activity-template.xlsx');
    }
    public function store_Activity(Request $request)
    {
        try {
            $part1 = strtoupper($request->part1); // otomatis huruf besar
            $part2 = strtoupper($request->part2);
            $part3 = strtoupper($request->part3);

            // Gabungkan semua bagian
            $fullCode = "{$part1}-{$part2}-{$part3}";


            $request->validate([
                'part1' => 'required|alpha|max:3|min:1',
                'part2' => 'required|alpha|max:3|min:1',
                'part3' => 'required|alpha_num|min:2|max:5',
                'id_disciplin' => 'required',
                'name_activity' => 'required',
            ]);
            Activity::create([
                'id' => $fullCode,
                'id_disciplin' => $request->id_disciplin,
                'name_activity' => $request->name_activity,
            ]);
            return redirect()->back()->with('success', 'Activity created successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', $e->getMessage());
        }
        // dd($request);
    }
    public function update_Activity(Request $request, $id)
    {
        $request->validate([
            'id' => 'required',
            'id_disciplin' => 'required',
            'name_activity' => 'required',
        ]);
        $activity = Activity::find($id);
        // dd($request);
        $activity->update([
            'id' => $request->id,
            'id_disciplin' => $request->id_disciplin,
            'name_activity' => $request->name_activity,
        ]);
        return redirect()->back()->with('success', 'Activity updated successfully.');
    }
    public function destroy_Activity($id)
    {
        $activity = Activity::find($id);
        if ($activity->delete()) {
            return redirect()->back()->with(['success', 'Data permanently deleted!!']);
        } else {
            $activity->forceDelete();
            return redirect()->back()->with(['error', 'Data Gagal Dihapus']);
        }
    }
    // End Resource Activity
    //============================================================
    //============================================================
    // Resource LogImport
    public function index_logimport(Request $request)
    {
        $pagination  = 10;
        $logimport = LogImport::when($request->keyword, function ($query) use ($request) {
            $query->where('source_table', 'like', "%{$request->agenda}%");
        })->orderBy('created_at', 'desc')->paginate($pagination);

        return view('page_logimport', [
            'title' => 'Log Import',
            'logimport' => $logimport,

        ]);
    }
    // End Resource LogImport
    //============================================================
    //============================================================
}
