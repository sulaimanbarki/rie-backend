<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Permissions extends Controller
{
    public function inlist_permissions(Request $request)
    {
        $permissions = DB::table('aduser_to_permission')
               // ->join('admin_users', 'aduser_to_permission.aduser_id', '=',  'admin_users.aduser_id')
                ->join('admin_permission', 'aduser_to_permission.permission_id', '=', 'admin_permission.permission_id')
                ->where('aduser_to_permission.aduser_id', $request->user()->aduser_id)
                ->select('admin_permission.permission_title AS title')
                ->get();
        $list = [];
        foreach ( $permissions as $row ) {
            array_push($list, $row->title);
        }
        return response()->json($list); 
    }
}
