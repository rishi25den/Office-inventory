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
        Schema::create('receive_txns', function (Blueprint $table) {
            $table->id(); // Primary key

            $table->unsignedBigInteger('order_item_id'); // reference to order_items
            $table->unsignedBigInteger('mst_equipment_drug_id'); // reference to equipment/drug
            $table->string('batch')->nullable(); // batch number
            $table->integer('quantity'); // received quantity
            $table->date('receive_date'); // date of receipt
            $table->unsignedBigInteger('users_id'); // reference to user

            $table->timestamps();

            $table->foreign('order_item_id')
                  ->references('id')
                  ->on('order_items')
                  ->onDelete('cascade');

            $table->foreign('mst_equipment_drug_id')
                  ->references('id')
                  ->on('mst_equipment_drugs')
                  ->onDelete('cascade');

            $table->foreign('users_id')
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
        Schema::dropIfExists('receive_txns');
    }
};
