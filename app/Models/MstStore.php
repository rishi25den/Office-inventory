<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\MstStoreType;

class MstStore extends Model
{
    /** @use HasFactory<\Database\Factories\MstStoreFactory> */
    use HasFactory;
    protected $table = 'mst_stores';

    protected $fillable = [
        'name',
        'parent_store_id',
        'store_type_id',
        'status',
    ];

    /**
     * A store may belong to a parent store (self relation).
     */
    public function parent()
    {
        return $this->belongsTo(MstStore::class);
    }

    /**
     * A store may have many child stores (self relation).
     */
    public function children()
    {
        return $this->hasMany(MstStore::class);
    }

    /**
     * A store belongs to a store type.
     */
    public function storeType()
    {
        return $this->belongsTo(MstStoreType::class);
    }

    /**
     * A store may have many users.
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
