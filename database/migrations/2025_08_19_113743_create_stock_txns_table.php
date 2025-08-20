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
        Schema::create('stock_txns', function (Blueprint $table) {
            $table->id(); // Primary key

            $table->unsignedBigInteger('mst_equipment_drug_id'); // reference to equipment/drug
            $table->integer('quantity'); // transaction quantity (+ or -)
            $table->integer('prev_quantity')->default(0); // stock before transaction
            $table->date('tran_date'); // transaction date
            $table->enum('tran_type', ['IN', 'OUT']); // IN = stock added, OUT = stock issued

            $table->timestamps();

            $table->foreign('mst_equipment_drug_id')
                  ->references('id')
                  ->on('mst_equipment_drugs')
                  ->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_txns');
    }
};
