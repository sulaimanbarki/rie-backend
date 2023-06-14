<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Mcategories;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class Categories extends Controller
{
    public function index()
    {
        return view('dashboard.categories.list');
    }
    public function renderList()
    {
        $query = Mcategories::paginate(10);
        return response()->json($query);
    }
    public function create()
    {
        return view('dashboard.categories.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'category_title' => 'required',
            'category_order' => 'required'
            
        ]);
        Mcategories::create([
            'category_name' => trim(ucwords($request->category_title)),
            'category_slug' => Str::slug(trim($request->category_title)),
            'category_order' => trim($request->category_order),
            'category_image' => $request->category_image
        ]);

        return redirect()->back()->with('msg', 'You have successfully created, '. $request->category_title);
    }
    public function status_change($id, $status)
    {
        $category = Mcategories::find($id);
        $category->_status = $status == 1 ? 0 : 1;
        $category->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }
    public function edit($id)
    {
        return view('dashboard.categories.edit', [
            'category' => Mcategories::find($id)
        ]);
    }
    public function update(Request $request)
    {
        $request->validate([
            'category_title' => 'required',
            'category_order' => 'required'
        ]);
        $category = Mcategories::where('category_id',$request->categoryid)->first();
        $category->category_name = trim(ucwords($request->category_title));
        $category->category_slug = Str::slug(trim($request->category_title));
        $category->category_order = $request->category_order;
        $category->category_image = $request->category_image;
        $category->save();
        return redirect()->back()->with('msg', $request->category_title.' has been updated');
    }

    public function destroy($id)
    {
        $category = Mcategories::find($id);
        $category->_status == 0;
        $category->save();
        return response()->json(['msg' => 'The category has been successfully deleted']);
    }
}
