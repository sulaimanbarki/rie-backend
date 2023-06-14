<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Authentication extends Controller
{
    protected $maxAttempts = 10; // default is 5
    protected $decayMinutes = 20;

    public function index()
    {
        return view('auth.login');
    }
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required | email',
            'password' => 'required',
        ]);
                if(Auth::attempt([
                    'aduser_name' => $request->username,
                    'password' => $request->password
                ], $request->remember)){
                    return redirect()->intended('home');
                }else{
                return redirect()->back()->with('msgErr', 'Wrong attempt, you have exceeded your login attempt quota.');
    }
  }
  public function logout()
  {
      Auth::logout();
      return redirect('/')->with('msg', 'Successfully logged out');
  }

}
