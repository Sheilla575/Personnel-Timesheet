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
        Schema::create('team_projects', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code_project', 15);
            $table->string('id_employee', 10);
            $table->string('status')->default('active');
            $table->timestamps();

            $table->foreign('code_project')->references('code_project')->on('projects')->onDelete('cascade');
            $table->foreign('id_employee')->references('id')->on('employees')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('team_projects', function (Blueprint $table) {
            $table->dropForeign('code_project_foreign');
            $table->dropColumn('code_project');
            $table->dropForeign('id_employee_foreign');
            $table->dropColumn('id_employee');
        });
    }
};
