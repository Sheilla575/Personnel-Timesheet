<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('timesheet_activities', function (Blueprint $table) {
            $table->string('id')->primary(); // Id Sheet Activity
            $table->char('id_timesheet');
            $table->date('date'); // date of activity
            $table->integer('hours');
            $table->string('note');
            $table->timestamps();


            $table->foreign('id_timesheet')->references('id')->on('timesheets')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('timesheet_activities', function (Blueprint $table) {
            $table->dropForeign('id_timesheet_foreign');
            $table->dropColumn('id_timesheet');
        });
    }
};
