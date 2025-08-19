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
        Schema::create('mst_stores', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // store name

            // Self-referencing parent store
            $table->unsignedBigInteger('parent_store_id')->nullable();

            // Store type reference
            $table->unsignedBigInteger('store_type_id');

            $table->boolean('status')->default(1); // 1 = active, 0 = inactive
            $table->timestamps();

            // Foreign key: parent store (self relation)
            $table->foreign('parent_store_id')
                  ->references('id')
                  ->on('mst_stores')
                  ->onDelete('set null');

            // Foreign key: store type (if mst_store_types table exists)
            $table->foreign('store_type_id')
                  ->references('id')
                  ->on('mst_store_types')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mst_stores');
    }
};
