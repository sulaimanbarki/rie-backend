<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RoleModuleMiddlware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $role = DB::table('aduser_to_role')
                            ->join('admin_roles', 'aduser_to_role.adrole_id', '=', 'admin_roles.adrole_id')
                            ->where('aduser_to_role.aduser_id', $request->user()->aduser_id)->first();
        $list = [];
        
        $links = DB::table('adrole_to_links')
                ->join('module_to_links', 'adrole_to_links.modulelink_id', '=', 'module_to_links.modulelink_id')
                ->where('adrole_to_links.adrole_id', $role->adrole_id)
                ->get();
        foreach ( $links as $row ) {
            // dd($row->link_val .'---'. $request->path());
            //  if ( $row->link_val != $request->path() ) {
            //     return abort(403);
            //  }


            //array_push($list, $row->link_val);
            if( stripos($row->link_val, '*')  !== false ) {
                $val = str_ireplace(['.edit', '.update' , '.destroy', '.show'], '', $request->route()->getName());
                if ( $val ) {
                    if ( !empty($request->route()->parameters) ) {
                        $parameterReplaceToBe = $request->route()->parameters[str_ireplace('-', '_', $val)];
                        $replaced = str_ireplace('*', $parameterReplaceToBe, $row->link_val);
                        array_push($list, $replaced);
                    }

                }

            } else {
                array_push($list, $row->link_val);
            }

        }
        if( !$request->ajax() ){
            if ( !in_array($request->path(), $list) ) {
                return abort(403);
            }
        }

        return $next($request);
    }
}
