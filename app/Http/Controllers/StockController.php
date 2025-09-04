<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StockController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Stock/StockList');      
    }

    public function entry(): Response
    {
        return Inertia::render('Stock/StockEntry');
    }
}
