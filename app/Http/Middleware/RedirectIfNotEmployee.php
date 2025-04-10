<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfNotEmployee
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */

    // app/Http/Middleware/RedirectIfNotEmployee.php
    public function handle($request, Closure $next)
    {
        if (!Auth::guard('employee')->check()) {
            return redirect('/');
        }
        return $next($request);
    }
}
