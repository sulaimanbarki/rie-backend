<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Mpolicy;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Policies extends Controller
{
    public function index()
    {
        return view('dashboard.policies.list');
    }
    public function renderList()
    {
        $query = Mpolicy::paginate(10);
        return response()->json($query);
    }
    public function create()
    {
        return view('dashboard.policies.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'policy_title' => 'required | unique:wq_policies,policy_title',
            'content' => 'required'
        ]);
        Mpolicy::create([
            'policy_title' => trim(ucwords($request->policy_title)),
            'policy_body' => $request->content,
            'policy_slug' => Str::slug(trim($request->policy_title))
        ]);

        return redirect()->back()->with('msg', 'You have successfully submited the policy');
    }
    public function status_change($id, $status)
    {
        $role = Mpolicy::find($id);
        $role->policy_status = $status == 1 ? 0 : 1;
        $role->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }
    public function edit($id)
    {
        return view('dashboard.policies.edit', [
            'policy' => Mpolicy::find($id)
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'policy_title' => 'required | unique:wq_policies,policy_title',
            'content' => 'required'
        ]);
        $pol = Mpolicy::find($id);
        $pol->policy_title = trim(ucwords($request->policy_title));
        $pol->policy_body = $request->content;
        $pol->policy_slug = Str::slug(trim($request->policy_title));
        $pol->save();
        return redirect()->back()->with('msg', 'Policy has been updated.');
    }
    public function destroy($id)
    {
        Mpolicy::find($id)->delete();
        return response()->json(['msg' => 'The policy has been successfully deleted.']);
    }
}
