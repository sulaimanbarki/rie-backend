<?php

namespace App\Http\Controllers;

use App\Models\Mcategories;
use App\Models\Mfield;
use App\Models\Mmenu;
use App\Models\Mroles;
use App\Models\Mmodule;
use App\Models\MwsspData;
use App\Models\Mpermission;
use Illuminate\Http\Request;
use App\Models\MmoduleToLinks;
use App\Models\MsubCategories;

class Common extends Controller
{
    public function rolesDropDown()
    {
        $query = Mroles::select('adrole_title AS label', 'adrole_id AS value')->orderBy('adrole_title')->get();
        return response()->json($query);
    }

    public function menusDropDown()
    {
        $query = Mmenu::select('menu_title AS label', 'menu_id AS value')->orderBy('menu_title')->get();
        return response()->json($query);
    }

    public function permissionDropDown()
    {
        $query = Mpermission::select('permission_title AS label', 'permission_id AS value')->orderBy('permission_title')->get();
        return response()->json($query);
    }
    public function moduleDropdown()
    {
        $query = Mmodule::select('module_title AS label', 'module_id AS value')->orderBy('module_title')->get();
        return response()->json($query);
    }
    public function categoriesDropdown()
    {
        $query = Mcategories::select('category_name AS label', 'category_id AS value')->orderBy('category_name')->get();
        return response()->json($query);
    }
    public function loadCategoryWiseSubcategories(Request $request) {
        
        $query = MsubCategories::where('category_id', $request->categoryid)->select('subcategory_name AS label', 'subcategory_id AS value')->where('_status', 1)->orderBy('subcategory_name')->get();
        return response()->json($query);
        
    }
    
    //
    public function module_links_via_module(Request $request)
    {
        $list = [];
        foreach ( $request->modules as $row ) {
            $query = MmoduleToLinks::where('module_id', $row)->select('modulelink_id', 'link_title', 'link_val')
                    ->orderBy('link_title')->get();
            array_push($list, [
                'list' => [
                    'module' => Mmodule::where('module_id', $row)->select('module_id', 'module_title')->first(),
                    'links' => $query 
                ]
            ]);
        }
        
        return response()->json($list);
    }
   
}
