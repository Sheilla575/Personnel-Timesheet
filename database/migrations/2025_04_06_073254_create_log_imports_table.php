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
        Schema::create('log_imports', function (Blueprint $table) {
            $table->increments('id');
            $table->string('source_table');
            $table->string('filename');
            $table->string('status'); // pending, success, error
            $table->string('user_id');
            $table->string('message', 255);
            $table->timestamp('imported_at')->useCurrent();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('log_imports');
    }
};
