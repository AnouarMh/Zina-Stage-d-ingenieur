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
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('email',191)->unique();
            $table->string('password');
            $table->string('numerotel');
            $table->string('image');
            $table->string('country');
            $table->string('localisation');
            $table->string('horaire');
            $table->unsignedBigInteger('superadmin_id'); // Clé étrangère vers la table superadmins
            $table->foreign('superadmin_id')->references('id')->on('superadmins');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
