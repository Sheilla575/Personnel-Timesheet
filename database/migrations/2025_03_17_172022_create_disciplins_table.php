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
        Schema::create('disciplins', function (Blueprint $table) {
            $table->string('id', 10)->primary(); //code disciplin
            $table->string('id_division', 10);
            $table->string('disciplin_name');
            $table->string('assignment')->nullable()->uniqid(); // PIC_User HOD form Employee ID or Add User 
            $table->date('assignment_date')->nullable();
            $table->timestamps();

            $table->foreign('id_division')->references('id')->on('divisions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('disciplins', function (Blueprint $table) {
            $table->dropForeign('id_division_foreign');
            $table->dropColumn('id_division');
        });
    }
};
