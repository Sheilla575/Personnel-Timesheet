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
        Schema::create('positions', function (Blueprint $table) {
            $table->string('id', 10)->primary(); //code disciplin
            $table->string('id_disciplin', 10);
            $table->string('positions_name');
            $table->timestamps();
            $table->foreign('id_disciplin')->references('id')->on('disciplins')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('positions', function (Blueprint $table) {
            $table->dropForeign('id_disciplin_foreign');
            $table->dropColumn('id_disciplin');
        });
    }
};
