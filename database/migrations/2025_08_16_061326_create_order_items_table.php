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
            $table->id(); // Primary key

            $table->unsignedBigInteger('mst_equipment_drug_id'); // reference to equipment/drug
            $table->boolean('is_received')->default(0); // 0 = not received, 1 = received
            $table->integer('quantity')->default(1); // quantity ordered
            $table->string('manufacturer')->nullable();
            $table->string('model_no')->nullable();
            $table->unsignedBigInteger('order_id'); // reference to orders

            $table->timestamps();

            // Foreign key constraint for orders
            $table->foreign('order_id')
                  ->references('id')
                  ->on('orders')
                  ->onDelete('cascade');

            // Foreign key constraint for mst_equipment_drugs table
            $table->foreign('mst_equipment_drug_id')
                  ->references('id')
                  ->on('mst_equipment_drugs')
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
