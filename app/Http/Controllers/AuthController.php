<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session as FacadesSession;

class AuthController extends Controller
{
    public function index()
    {
        return view('page_login');
    }
    public function proses_login(Request $request)
    {
        request()->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        // Cek sebagai Admin (Level 1)
        if (Auth::guard('web')->attempt($credentials)) {
            $user = Auth::guard('web')->user();

            if ($user->role->level_roles == 1) {
                return redirect()->intended('/settings-system');
            } elseif ($user->role->level_roles == 2) {
                return redirect()->intended('/all-project');
            } elseif ($user->role->level_roles == 3) {
                return redirect()->intended('/form-timesheet');
            }
        }

        // Cek sebagai PM atau Employee (Level 2 atau 3)
        if (Auth::guard('employee')->attempt($credentials)) {
            $employee = Auth::guard('employee')->user();

            if ($employee->role->level_roles == 3) {
                return redirect()->intended('/form-timesheet');
            } elseif ($employee->role->level_roles == 2) {
                return redirect()->intended('/all-project');
            } elseif ($user->role->level_roles == 1) {
                return redirect()->intended('/settings-system');
            }
        }


        return back()->withErrors(['login' => 'Email atau password salah!']);
    }



    public function logout()
    {
        Auth::guard('web')->logout();
        Auth::guard('employee')->logout();
        // Hapus session

        request()->session()->invalidate();
        request()->session()->regenerateToken();
        Artisan::call('route:clear');
        FacadesSession::flush();
        return redirect('/');
    }
}
