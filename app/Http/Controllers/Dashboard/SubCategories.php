<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\MsubCategories;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class SubCategories extends Controller
{
    public function index()
    {
        return view('dashboard.subcategories.list');
    }
    public function renderList()
    {
        $query = DB::table('wq_subcategories')
        ->join('wq_categories', 'wq_subcategories.category_id', '=', 'wq_categories.category_id')
        ->select('wq_categories.category_name','wq_subcategories.subcategory_id','wq_subcategories.subcategory_name',
        'wq_subcategories.subcategory_order','wq_subcategories.subcategory_image','wq_subcategories._status')->paginate(10);
        return response()->json($query);
    }
    public function create()
    {
        return view('dashboard.subcategories.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'category' => 'required',
            'subcategory_title' => 'required',
            
        ]);
        MsubCategories::create([
            'category_id' => $request->category,
            'subcategory_name' => trim(ucwords($request->subcategory_title)),
            'subcategory_slug' => Str::slug(trim($request->subcategory_title)),
            'subcategory_order' => trim($request->subcategory_order),
            'subcategory_image' => $request->subcategory_image
        ]);

        return redirect()->back()->with('msg', 'You have successfully created, '. $request->subcategory_title);
    }
    public function status_change($id, $status)
    {
        $subcategory = MsubCategories::find($id);
        $subcategory->_status = $status == 1 ? 0 : 1;
        $subcategory->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }
    public function edit($id)
    {
        return view('dashboard.subcategories.edit', [
            'subcategory' => DB::table('wq_subcategories')
            ->join('wq_categories', 'wq_subcategories.category_id', '=', 'wq_categories.category_id')
            ->where('wq_subcategories.subcategory_id', $id)->first()
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'category' => 'required',
            'subcategory_title' => 'required',
        ]);
        $subcategory = MsubCategories::where('subcategory_id',$request->subcategoryid)->first();
        // if ($request->category)
        // {
            $subcategory->category_id = $request->category;
        //}
        $subcategory->subcategory_name = trim(ucwords($request->subcategory_title));
        $subcategory->subcategory_slug = Str::slug(trim($request->subcategory_title));
        $subcategory->subcategory_order = trim($request->subcategory_order);
        $subcategory->subcategory_image = $request->subcategory_image;
        $subcategory->save();
        return redirect()->back()->with('msg', $request->subcategory_title.' has been updated');
    }

    public function destroy($id)
    {
        $subcategory = MsubCategories::find($id);
        $subcategory->_status == 0;
        $subcategory->save();
        return response()->json(['msg' => 'The subcategory has been successfully deleted']);
    }
}
