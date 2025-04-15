<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class CacheRoutes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'custom:route-cache';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run route:cache to cache routes automatically';

    /**
     * Execute the console command.
     */
    // protected $signature = 'custom:route-cache': app:cache-routes

    public function handle()
    {
        $this->info('Running route:cache...');
        Artisan::call('route:cache');
        Artisan::call('route:clear');
        $this->info('Routes cached successfully!');
        return Command::SUCCESS;
    }
}
