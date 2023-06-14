<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Msliders;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Sliders extends Controller
{
    public function index()
    {
        return view('dashboard.sliders.list');
    }
    public function renderList()
    {
        $query = Msliders::paginate(10);
        return response()->json($query);
    }
    public function create()
    {
        return view('dashboard.sliders.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'slider_title' => 'required',
            'slider_order'  => 'required',
            'slider_cover' => 'required'
        ]);
        
        Msliders::create([
            'slider_title' => trim($request->slider_title),
            'slider_link' => $request->slider_link,
            'slider_order' => trim($request->slider_order),
            'slider_image' => $request->slider_cover,
            'slider_description' => trim($request->slider_summary)
        ]);

        return redirect()->back()->with('msg', 'You have successfully created '. $request->slider_title);
    }

    public function status_change($id, $status)
    {
        $slider = Msliders::find($id);
        $slider->_status = $status == 1 ? 0 : 1;
        $slider->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }

    public function edit($id)
    {
        return view('dashboard.sliders.edit', [
            'slider' => Msliders::find($id)
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'slider_title' => 'required',
            'slider_order'  => 'required',
            'slider_cover' => 'required'
        ]);
        $slider = Msliders::where('slider_id',$request->sliderid)->first();
        $slider->slider_title = trim($request->slider_title);
        $slider->slider_link = $request->slider_link;
        $slider->slider_order = trim($request->slider_order);
        $slider->slider_image = $request->slider_cover;
        $slider->slider_description = trim($request->slider_summary);
        $slider->save();
        return redirect()->route('slider-mgt.index')->with('msg', 'Slider has been updated.');
    }

    public function destroy($id)
    {
        Msliders::find($id)->delete();
        return response()->json(['msg' => 'The slider has been successfully deleted.']);
    }
}
