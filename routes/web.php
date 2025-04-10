<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TimesheetController;
use App\Livewire\ImportActivity;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them willk/
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('page_login');
// });
Route::get('/', [AuthController::class, 'index'])->name('login');
Route::post('proses_login', [AuthController::class, 'proses_login'])->name('proses_login');
Route::get('logout', [AuthController::class, 'logout'])->name('logout');

// Route::get('/page-project', function () {
//     return view('detailproject');
// });

Route::middleware(['auth:web', 'cek_login:1'])->group(function () {
    //========== page Data User | Employee ==========\\
    Route::post('/store_user', [SettingController::class, 'store_user'])->name('store_user');
    Route::post('/setup_user/{id}', [SettingController::class, 'update_user'])->name('update_user');
    Route::post('/remove_user/{id}', [SettingController::class, 'destroy_user'])->name('destroy_user');
    //========== page Setting ==========\\
    Route::get('/settings-system', [SettingController::class, 'index'])->name('Page_Setting');
    Route::post('/setup_hod/{id}', [SettingController::class, 'assign_HOD'])->name('assign_HOD');
    Route::post('/store_position', [SettingController::class, 'store_Position'])->name('store_Position');
    Route::post('/setup_position/{id}', [SettingController::class, 'update_Position'])->name('update_Position');
    Route::post('/remove_Position/{id}', [SettingController::class, 'destroy_Position'])->name('destroy_Position');
    Route::post('/store_Activity', [SettingController::class, 'store_Activity'])->name('store_Activity');
    Route::post('/setup_Activity/{id}', [SettingController::class, 'update_Activity'])->name('update_Activity');
    Route::post('/remove_Activity/{id}', [SettingController::class, 'destroy_Activity'])->name('destroy_Activity');
    //========== Import Master Data ==========\\
    Route::get('/template_activity', [SettingController::class, 'downloadTemplateActivity'])->name('downloadTemplateActivity');
    Route::view('/preview/Activity', [ImportActivity::class, 'preview'])->name('preview_activity');
    Route::post('/import/Activity', [ImportActivity::class, 'import'])->name('import_activity');
    //========== Main Calendar ==========\\
    Route::get('/menu-calendar', [CalendarController::class, 'index_calender'])->name('index_calender');
    Route::post('/store_calendar', [CalendarController::class, 'store_calendar'])->name('store_calendar');
    Route::post('/update_calendar/{id}', [CalendarController::class, 'update_calendar'])->name('update_calendar');
    Route::post('/remove_calendar/{id}', [CalendarController::class, 'destroy_calendar'])->name('destroy_calendar');
});

Route::middleware(['auth', 'cek_login:1,2'])->group(function () {
    Route::get('/all-project', [ProjectController::class, 'index'])->name('listproject');
    Route::get('/project/{code_project:code_project}', [ProjectController::class, 'setting_Project'])->name('indexProject');
});

Route::middleware(['auth:employee', 'cek_login:1'])->group(function () {

    Route::get('/form-timesheet', [TimesheetController::class, 'worksheet'])->name('worksheet');

    Route::post('/draft-timsheet', [TimesheetController::class, 'draft_timesheet'])->name('draft_timesheet');
});

Route::get('/settings-users', [SettingController::class, 'index_users'])->name('index_users');
Route::get('/get-week-calendar', [TimesheetController::class, 'getWeekCalendar']);
Route::get('/get-events', [CalendarController::class, 'getEvents'])->name('get_events');
