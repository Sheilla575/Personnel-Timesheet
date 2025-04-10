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
        Schema::create('employees', function (Blueprint $table) {
            $table->string('id', 10)->primary(); //code employees = EP0001
            $table->string('id_position', 10);
            $table->string('name');
            $table->string('email');
            $table->char('type_user');
            $table->char('level_roles')->nullable();
            $table->char('password', 100);
            $table->char('Status')->default('Active');
            $table->timestamps();

            $table->foreign('id_position')->references('id')->on('positions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees', function (Blueprint $table) {
            $table->dropForeign('id_position_foreign');
            $table->dropColumn('id_position');
        });
    }
};
