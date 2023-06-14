<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Mmodule;
use App\Models\MmoduleToLinks;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class Modules extends Controller
{
    public function index()
    {
        return view('dashboard.modules.list');
    }
    public function render_list()
    {
        $query = DB::table('wq_module')
                ->join('module_to_links', 'wq_module.module_id', '=', 'module_to_links.module_id')
                ->groupBy('module_to_links.module_id')
                ->orderBy('_order')
                ->get();
        return response()->json([
            $query,
            Mmodule::count()
        ]);
    }
    public function render_links($id)
    {
        $query = MmoduleToLinks::where('module_id', $id)->get();
        return response()->json($query);
    }
    public function add_single_link(Request $request, $id)
    {
        $request->validate([
            'link_title' => 'required | unique:wq_module,module_title',
            'link' => 'required',
            'visibilty' => 'required'
        ]);
        MmoduleToLinks::create([
            'module_id' => $id,
            'link_title' => trim($request->link_title),
            'link_val' => trim($request->link),
            '_visiblity' => trim($request->visibilty)
        ]);
        return response()->json(['msg' => 'Link has been successfully created.']);
    }
    public function delete_a_link($id)
    {
        MmoduleToLinks::find($id)->delete();
        return response()->json(['msg' => 'Link has been successfully deleted.']);
    }
    public function create()
    {
        return view('dashboard.modules.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'module_title' => 'required | unique:wq_module,module_title',
            'links' => 'required | array',
            'order' => 'required | numeric'
        ]);
        $module = Mmodule::create([
            'module_title' => trim($request->module_title),
            'module_slug' => Str::slug(trim($request->module_title)),
            '_order' => $request->order
        ]);
        foreach ( $request->links as $row ) {
            MmoduleToLinks::create([
                'module_id' => $module->module_id,
                'link_title' => trim($row['title']),
                'link_val' => trim($row['link']),
                '_visiblity' => $row['visibilty']
            ]);
        }
        return response()->json(['msg' => 'Module has been successfully created.']);
    }
    public function edit($id)
    {
        $module = Mmodule::find($id);
        $list = [];
        array_push($list, [
            'module_id' => $module->module_id,
            'title' => $module->module_title,
            '_order' => $module->_order,
            'links' => MmoduleToLinks::where('module_id', $id)->select('link_title', 'link_val', '_visiblity')->get()
        ]);
        return view('dashboard.modules.edit', [
            'module' => $list
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'module_title' => 'required',
            'links' => 'required | array',
            'order' => 'required | numeric'
        ]);
        $module = Mmodule::find($id);
        $module->module_title = trim($request->module_title);
        $module->module_slug = Str::slug(trim($request->module_title));
        $module->_order = $request->order;
        $module->save();
        MmoduleToLinks::where('module_id', $id)->delete();
        foreach ( $request->links as $row ) {
            MmoduleToLinks::create([
                'module_id' => $module->module_id,
                'link_title' => trim($row['title']),
                'link_val' => trim($row['link']),
                '_visiblity' => $row['visibilty']
            ]);
        }
        return response()->json(['msg' => 'Module has been successfully updated.']);
    }
    public function destroy($id)
    {
        Mmodule::find($id)->delete();
        MmoduleToLinks::where('module_id', $id)->delete();
        return response()->json(['msg' => 'The module has been successfully deleted.']);
    }
}
