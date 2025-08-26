<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        // return Inertia::render('Auth/Register');
        return Inertia::render('tailAdmin/pages/AuthPages/SignUp');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|lowercase|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'store' => 'required|string', // Ensure store is required
        ]);

        // console.log($request->store); // Debugging line to check store value
        $role = $request->store === 'admin' ? 'admin' : 'user';
        $storeId = $role === 'admin' ? null : $request->store;
        // die($storeId); // Debugging line to check storeId value

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'role' => $role,
            'mst_store_id' => $storeId,
        ]);

        event(new Registered($user));

        Auth::login($user);


        return redirect(route('dashboard', absolute: false))->with("success", "Account created successfully.");
    }
}
