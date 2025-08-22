<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\OrderItem;
use App\Models\MstEquipmentDrug;
use App\Models\User;

class Receive_txn extends Model
{
    /** @use HasFactory<\Database\Factories\ReceiveTxnFactory> */
    use HasFactory;

    protected $table = 'receive_txn';

    protected $fillable = [
        'order_item_id',
        'mst_equipment_drug_id',
        'batch',
        'quantity',
        'receive_date',
        'users_id',
    ];

    // Relationships
    public function orderItem()
    {
        return $this->belongsTo(OrderItem::class);
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
