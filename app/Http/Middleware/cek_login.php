<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class cek_login
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */

    // public function handle(Request $request, Closure $next)
    // {
    //     return $next($request);
    // }

    public function handle(Request $request, Closure $next, $roles)
    {

        // if (!Auth::check()) {
        //     return redirect('/');
        // }
        $rolesArray = array_map('intval', explode(',', $roles));

        $user = Auth::user();

        if ($user || in_array($user->level_roles, $rolesArray)) {
            return $next($request);
        }
        return redirect()->route('auth_akses')->with('error', "Anda Tidak Memiliki Akses");
    }
}
