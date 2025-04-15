<?php

namespace App\Providers;

use App\Models\Disciplin;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        View::composer('partials.sidebar', function ($view) {
            $disciplines = Disciplin::all();
            $view->with('disciplines', $disciplines);
        });
    }
}
