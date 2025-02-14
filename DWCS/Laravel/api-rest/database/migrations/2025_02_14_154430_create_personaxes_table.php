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

            Schema::create('personaxes', function (Blueprint $table) {
                $table->id();
                $table->string('nome');
                $table->string('imaxe');
                $table->string('tipo');
                $table->text('descricion');
                $table->timestamps();

                $table->foreign('tipo')->references('nome')->on('tipos');
            });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personaxes');
    }
};
