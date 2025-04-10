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
        Schema::create('projects', function (Blueprint $table) {
            $table->string('code_project', 15)->primary(); //code projects
            $table->string('name_project', 75);
            $table->date('start_date');
            $table->date('end_date');
            $table->integer('total_plan_manhours')->nullable();
            $table->string('project_manager', 10);
            $table->string('status');
            $table->timestamps();

            $table->foreign('project_manager')->references('id')->on('employees')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects', function (Blueprint $table) {
            $table->dropForeign('project_manager_foreign');
            $table->dropColumn('project_manager');
        });
    }
};
