<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mst_program extends Model
{
    /** @use HasFactory<\Database\Factories\MstProgramFactory> */
    use HasFactory;

    protected $table = 'mst_programs';

    protected $fillable = [
        'prog_name',
        'description',
        'status',
    ];

    
}
