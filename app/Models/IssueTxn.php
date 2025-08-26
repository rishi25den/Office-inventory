<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Stock;
use App\Models\MstEquipmentDrug;
use App\Models\User;

class IssueTxn extends Model
{
    /** @use HasFactory<\Database\Factories\IssueTxnFactory> */
    use HasFactory;

    protected $table = 'issue_txn';

    protected $fillable = [
        'stock_id',
        'mst_equipment_drug_id',
        'batch',
        'quantity',
        'issue_date',
        'users_id',
    ];

    // Relationships
    public function stock()
    {
        return $this->belongsTo(Stock::class);
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
