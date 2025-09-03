<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MstEquipmentDrug extends Model
{
    /** @use HasFactory<\Database\Factories\MstEquipmentDrugFactory> */
    use HasFactory;

    protected $table = 'mst_equipment_drugs';

    protected $fillable = [
        'name',
        'description',
        'status',
    ];
}
