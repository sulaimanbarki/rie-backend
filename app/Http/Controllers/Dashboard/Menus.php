<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Mmenu;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\shortCode;

class Menus extends Controller
{
    use shortCode;

    public function index()
    {
        return view('dashboard.menus.list');
    }

    public function renderList()
    {
        $query = Mmenu::paginate(10);
        return response()->json($query);
    }

    public function create()
    {
        return view('dashboard.menus.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'menu_title' => 'required|unique:wq_menus,menu_title',
            'menu_order'  => 'required|numeric'
        ]);
        
        Mmenu::create([
            'menu_code' => $this->runCode(),
            'menu_title' => trim(ucwords($request->menu_title)),
            'menu_slug' => Str::slug(trim($request->menu_title)),
            'menu_order' => trim($request->menu_order)
        ]);

        return redirect()->back()->with('msg', 'You have successfully created '. $request->menu_title);
    }

    public function edit($id)
    {
        return view('dashboard.menus.edit', [
            'menu' => Mmenu::find($id)
        ]);
    }

    public function update(Request $request, $menuid)
    {
        $request->validate([
            'menu_title' => 'required|unique:wq_menus,menu_title,' . $menuid . ',menu_id',
            'menu_order'  => 'required|numeric'
        ]);
        $menu = Mmenu::where('menu_id',$menuid)->first();

        $menu->menu_title = trim($request->menu_title);
        $menu->menu_order = trim($request->menu_order);
        $menu->save();
        return redirect()->back()->with('msg', 'Menu has been updated.');
    }

    public function destroy($id)
    {
        Mmenu::find($id)->delete();
        return response()->json(['msg' => 'The menu has been successfully deleted.']);
    }
}
