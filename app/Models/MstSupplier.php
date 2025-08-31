<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MstSupplier extends Model
{
    /** @use HasFactory<\Database\Factories\MstSupplierFactory> */
    use HasFactory;

    protected $table = 'mst_suppliers';

    protected $fillable = [
        'name',
        'address',
        'status',
    ];
}
