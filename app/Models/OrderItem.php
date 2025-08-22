<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order;
use App\Models\MstEquipmentDrug;

class OrderItem extends Model
{
    /** @use HasFactory<\Database\Factories\OrderItemFactory> */
    use HasFactory;

    protected $table = 'order_items';

    protected $fillable = [
        'mst_equipment_drug_id',
        'is_received',
        'quantity',
        'order_id',
    ];

    // Relationships
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function equipmentDrug()
    {
        return $this->belongsTo(MstEquipmentDrug::class, 'mst_equipment_drug_id');
    }
}
