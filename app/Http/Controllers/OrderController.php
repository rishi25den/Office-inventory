<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OrderController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Order/OrderList');      
    }

    public function entry(): Response
    {
        return Inertia::render('Order/OrderEntry');
    }
}
