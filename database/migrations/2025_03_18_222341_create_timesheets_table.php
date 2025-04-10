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
        Schema::create('timesheets', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('id_employee');
            $table->integer('week');
            $table->integer('year');
            $table->string('code_project'); // Code Project
            $table->string('code_activity'); // Id form Tabel Activities
            $table->string('status')->default('Draft'); //Pending, Reject, Approve
            $table->timestamps();

            $table->foreign('id_employee')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('code_project')->references('code_project')->on('projects')->onDelete('cascade');
            $table->foreign('code_activity')->references('id')->on('activities')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('timesheets', function (Blueprint $table) {
            $table->dropForeign('id_employee_foreign');
            $table->dropColumn('id_employee');
            $table->dropForeign('code_project_foreign');
            $table->dropColumn('code_project');
            $table->dropForeign('id_activity_foreign');
            $table->dropColumn('code_activity');
        });
    }
};
