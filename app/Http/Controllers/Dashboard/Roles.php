<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Mroles;
use App\Traits\shortCode;
use Illuminate\Support\Str;
use App\Models\MroleToLinks;
use Illuminate\Http\Request;
use App\Models\MroleToModule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\MmoduleToLinks;

class Roles extends Controller
{
    use shortCode;

    public function index()
    {
        return view('dashboard.roles.home');
    }
    public function list_render()
    {
        $query = Mroles::paginate(10);
        return response()->json($query);
    }
    public function store(Request $request)
    {
            $request->validate([
                'role' => 'required | unique:admin_roles,adrole_title'
            ]);
            $role = Mroles::create([
                'adrole_code' => $this->runCode(),
                'adrole_uuid' => (string) Str::uuid(),
                'adrole_title' => trim($request->role),
                'adrole_slug' => trim(Str::slug($request->role)),
                'adrole_description' => nl2br($request->description)
            ]);
            foreach ( $request->selectedModules as $row ) {
                MroleToModule::create([
                    'adrole_id' => $role->adrole_id,
                    'module_id' => $row
                ]);
            }
            foreach ( $request->assigned_links as $row ) {
                MroleToLinks::create([
                    'adrole_id' => $role->adrole_id,
                    'modulelink_id' => $row
                ]);
            }
            
            return response()->json(['msg' => 'Role has been successfully created.']);
    }
    public function show($id)
    {
        return response()->json(Mroles::find($id));
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'role' => 'required'
        ]);
        $role = Mroles::find($id);
        $role->adrole_title = trim($request->role);
        $role->adrole_slug = (string) Str::slug(trim($request->role));
        $role->adrole_description = nl2br($request->description);
        $role->save();
        return response()->json(['msg' => 'Role has been successfully updated.']);
    }
    public function status_change($id, $status)
    {
        $role = Mroles::find($id);
        $role->adrole_status = $status == 1 ? 0 : 1;
        $role->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }
    public function destroy($id)
    {
        Mroles::find($id)->delete();
        return response()->json(['msg' => 'The role has been successfully deleted.']);
    }
    public function get_roles_modules($roleId)
    {
        $query = DB::table('adrole_to_module')
                ->join('admin_roles', 'adrole_to_module.adrole_id', 'admin_roles.adrole_id')
                ->join('wq_module', 'adrole_to_module.module_id', 'wq_module.module_id')
                ->where('adrole_to_module.adrole_id', $roleId)
                ->get();
        $list = [];
        foreach ( $query as $row ) {
            array_push($list, [
                'module' => $row->module_title,
                'module_id' => $row->module_id,
                'rolemodule_id' => $row->rolemodule_id,
                'links' => DB::table('adrole_to_links')
                    ->join('admin_roles', 'adrole_to_links.adrole_id', 'admin_roles.adrole_id')
                    ->join('module_to_links', 'adrole_to_links.modulelink_id', 'module_to_links.modulelink_id')
                    ->where('adrole_to_links.adrole_id', $roleId)
                    ->where('module_to_links.module_id', $row->module_id)
                    ->get()
            ]);
        }
        return response()->json($list);
    }
    public function remove_link_from_role($roleLinkId)
    {
        MroleToLinks::find($roleLinkId)->delete();
        return response()->json(['msg' => 'The link has been successfullt removed from the role.']);
    }
    public function remove_module_links_from_role($rolemoduleId)
    {
        $getModule = MroleToModule::find($rolemoduleId);

        $getModuleId = MmoduleToLinks::where('module_id', $getModule->module_id)->first();

        MroleToLinks::where('adrole_id', $getModule->adrole_id)->where('modulelink_id', $getModuleId->modulelink_id)->delete();

        MroleToModule::find($rolemoduleId)->delete();

        return response()->json(['msg' => 'The Module has been successfully deleted.']);
    }
    public function assign_module_link_role(Request $request)
    {
        $request->validate([
            'assigned_links' => 'required | array',
            'selectedModules' => 'required | array',
            'roleId' => 'required'
        ], [
            'assigned_links.required' => 'Links are required',
            'selectedModules.required' => 'Module is required'
        ]);
        foreach ( $request->selectedModules as $row ) {
            $check = MroleToModule::where('adrole_id', $request->roleId)
                ->where('module_id', $row)->first();
            if ($check) {
                continue;
            }
            MroleToModule::create([
                'adrole_id' => $request->roleId,
                'module_id' => $row
            ]);
        }
        foreach ( $request->assigned_links as $row ) {
            $check = MroleToLinks::where('adrole_id', $request->roleId)
                ->where('modulelink_id', $row)->first();
            if ($check) {
                continue;
            }
            MroleToLinks::create([
                'adrole_id' => $request->roleId,
                'modulelink_id' => $row
            ]);
        }
        
        return response()->json(['msg' => 'Module has been assigned to role.']);
    }
}
