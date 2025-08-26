<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\MstStore;

class MstStoreType extends Model
{
    /** @use HasFactory<\Database\Factories\MstStoreTypeFactory> */
    use HasFactory;

    protected $fillable = [
        'type',
        'status',
    ];

    /**
     * A storeType may have many stores.
     */
    public function stores()
    {
        return $this->hasMany(MstStore::class);
    }
}
