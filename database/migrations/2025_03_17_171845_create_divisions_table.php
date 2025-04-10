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
        Schema::create('divisions', function (Blueprint $table) {
            $table->string('id', 10)->primary(); //code division
            $table->string('id_department', 10);
            $table->string('division_name');
            $table->string('assignment')->nullable()->uniqid(); // PIC_User HOD form Employee ID or Add User
            $table->date('assignment_date')->nullable();
            $table->string('status')->default('Non Active');
            $table->timestamps();

            $table->foreign('id_department')->references('id')->on('departments')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('divisions', function (Blueprint $table) {
            $table->dropForeign('id_department_foreign');
            $table->dropColumn('id_department');
            $table->dropForeign('assignment_foreign');
            $table->dropColumn('assignment');
        });
    }
};
