<?php

use Illuminate\Support\Facades\Auth;

if (!function_exists('user')) {
    function user()
    {
        $guard = Auth::guard('employee')->check() ? 'employee' : 'web';
        return Auth::guard($guard)->user();
    }
}
