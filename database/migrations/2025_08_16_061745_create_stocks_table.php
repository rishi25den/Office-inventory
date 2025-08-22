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
        Schema::create('stocks', function (Blueprint $table) {
            $table->id(); // Primary key

            $table->unsignedBigInteger('store_id'); // reference to store
            $table->unsignedBigInteger('mst_equipment_drug_id'); // reference to equipment/drug
            $table->text('description')->nullable(); // notes or description
            $table->string('batch')->nullable(); // batch number
            $table->integer('quantity')->default(0); // available quantity
            $table->unsignedBigInteger('user_id'); // reference to user
            $table->timestamps();

            $table->foreign('store_id')
                  ->references('id')
                  ->on('mst_stores')
                  ->onDelete('cascade');

            $table->foreign('mst_equipment_drug_id')
                  ->references('id')
                  ->on('mst_equipment_drugs')
                  ->onDelete('cascade');

            $table->foreign('user_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stocks');
    }
};
