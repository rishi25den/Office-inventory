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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_no')->unique(); // order number
            $table->date('order_date'); // order date
            $table->unsignedBigInteger('mst_supplier_id'); // foreign key to suppliers
            $table->unsignedBigInteger('mst_program_id');  // foreign key to programs
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('mst_supplier_id')
                  ->references('id')
                  ->on('mst_suppliers')
                  ->onDelete('cascade');

            $table->foreign('mst_program_id')
                  ->references('id')
                  ->on('mst_programs')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
