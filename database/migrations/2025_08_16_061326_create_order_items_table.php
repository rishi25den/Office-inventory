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
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('mst_equipment_drug_id'); // equipment/drug reference
            $table->boolean('is_received')->default(0); // 0 = not received, 1 = received
            $table->date('receive_date')->nullable(); // date when received
            $table->unsignedBigInteger('order_id'); // foreign key to orders

            $table->timestamps();

            // Foreign key constraint (to orders table)
            $table->foreign('order_id')
                  ->references('id')
                  ->on('orders')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
