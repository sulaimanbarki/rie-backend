<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\MfooterLinks;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class FooterLinks extends Controller
{
    public function index()
    {
        return view('dashboard.footerlinks.list');
    }
    public function renderList()
    {
        $query = MfooterLinks::paginate(10);
        return response()->json($query);
    }
    public function create()
    {
        return view('dashboard.footerlinks.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'link_title' => 'required',
            'link' => 'required',
            'link_type' => 'required'
        ]);
        MfooterLinks::create([
            'footer_linkname' => trim(ucwords($request->link_title)),
            'footer_linknameslug' => Str::slug(trim($request->link_title)),
            'footer_link' => trim($request->link),
            'footer_linktype' => $request->link_type['title']
        ]);

        return redirect()->back()->with('msg', 'You have successfully created, '. $request->link_title.' link');
    }
    public function status_change($id, $status)
    {
        $footer = MfooterLinks::find($id);
        $footer->_status = $status == 1 ? 0 : 1;
        $footer->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }
    public function edit($id)
    {
        return view('dashboard.footerlinks.edit', [
            'footer' => MfooterLinks::find($id)
        ]);
    }

    public function editJs ($id)
    {
        return response()->json(MfooterLinks::find($id));
    }

    public function update(Request $request)
    {
        $request->validate([
            'link_title' => 'required',
            'link' => 'required',
            'link_type' => 'required'
        ]);
        $footer = MfooterLinks::where('footer_linkid',$request->footerlinkid)->first();
        $footer->footer_linkname = trim(ucwords($request->link_title));
        $footer->footer_linknameslug = Str::slug(trim($request->link_title));
        $footer->footer_link = $request->link;
        $footer->footer_linktype = $request->link_type;
        $footer->save();
        return redirect()->back()->with('msg', $request->link_title.' has been updated');
    }

    public function destroy($id)
    {
        $footer = MfooterLinks::find($id);
        $footer->_status == 0;
        $footer->save();
        return response()->json(['msg' => 'The link has been successfully deleted']);
    }
}
