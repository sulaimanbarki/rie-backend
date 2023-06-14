<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Minbox;

class InboxManagement extends Controller
{
    public function index()
    {
        return view('dashboard.inbox.list');
    }
    public function renderList()
    {
        $query = Minbox::paginate(10);
        return response()->json($query);
    }
    
    public function destroy($id)
    {
        Minbox::find($id)->delete();
        return response()->json(['msg' => 'The blog has been successfully deleted.']);
    }
}
