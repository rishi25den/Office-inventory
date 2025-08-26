<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    /** @use HasFactory<\Database\Factories\StockFactory> */
    use HasFactory;

    protected $table = 'stocks';

    protected $fillable = [
        'store_id',
        'mst_equipment_drug_id',
        'description',
        'batch',
        'quantity',
        'user_id',
    ];

    // Relationships
    public function store()
    {
        return $this->belongsTo(MstStore::class);
    }

    public function equipmentDrug()
    {
        return $this->belongsTo(MstEquipmentDrug::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
