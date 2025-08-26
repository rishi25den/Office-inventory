<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrderController;
use App\Models\Mst_store;
use App\Http\Controllers\Auth\RegisteredUserController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
//Auth Layout
// Route::get('/signin', function () {
//     return Inertia::render('tailAdmin/pages/AuthPages/SignIn');
// });


Route::get('/dashboard', function () {
    // return Inertia::render('Dashboard');
    return Inertia::render('tailAdmin/pages/Dashboard/Home');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    //Order
    Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
    Route::get('/orders/entry', [OrderController::class, 'entry'])->name('orders.entry');
    // Route::get('/orders/create', [OrderController::class, 'create'])->name('orders.create');
    // Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');
    // Route::get('/orders/{order}', [OrderController::class, 'show'])->name('orders.show');
    // Route::get('/orders/{order}/edit', [OrderController::class, 'edit'])->name('orders.edit');
    // Route::put('/orders/{order}', [OrderController::class, 'update'])->name('orders.update');
    // Route::delete('/orders/{order}', [OrderController::class, 'destroy'])->name('orders.destroy');

    Route::get('/signup', function () {
        $storeList = MstStore::where('status', 1)->get()
        ->map(fn ($item) => [
            'value' => $item->id,   // could also be $item->slug
            'label' => $item->name,
        ]);
        return Inertia::render('tailAdmin/pages/AuthPages/RegisterUser', [
            'storeList' => $storeList,
        ]);
    });

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('/calendar', function () {
        return Inertia::render('tailAdmin/pages/Calendar');
    })->name('calendar');
    Route::get('/profile', function () {
        return Inertia::render('tailAdmin/pages/UserProfiles');
    })->name('profile');
    Route::get('/form-elements', function () {
        return Inertia::render('tailAdmin/pages/Forms/FormElements');
    })->name('form-elements');
    Route::get('/basic-tables', function () {
        return Inertia::render('tailAdmin/pages/Tables/BasicTables');
    })->name('basic-tables');
    Route::get('/blank', function () {
        return Inertia::render('tailAdmin/pages/Blank');
    })->name('blank');
    Route::get('/error-404', function () {
        return Inertia::render('tailAdmin/pages/OtherPage/NotFound');
    })->name('error-404');

    // Charts
    Route::get('/line-chart', function () {
        return Inertia::render('tailAdmin/pages/Charts/LineChart');
    })->name('line-chart');
    Route::get('/bar-chart', function () {
        return Inertia::render('tailAdmin/pages/Charts/BarChart');
    })->name('bar-chart');

    // Ui Elements
    Route::get('/alerts', function () {
        return Inertia::render('tailAdmin/pages/UiElements/Alerts');
    })->name('alerts');
    Route::get('/avatars', function () {
        return Inertia::render('tailAdmin/pages/UiElements/Avatars');
    })->name('avatars');
    Route::get('/badge', function () {
        return Inertia::render('tailAdmin/pages/UiElements/Badges');
    })->name('badge');
    Route::get('/buttons', function () {
        return Inertia::render('tailAdmin/pages/UiElements/Buttons');
    })->name('buttons');
    Route::get('/img', function () {
        return Inertia::render('tailAdmin/pages/UiElements/Images');
    })->name('img');
    Route::get('/videos', function () {
        return Inertia::render('tailAdmin/pages/UiElements/Videos');
    })->name('videos');

    

    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
