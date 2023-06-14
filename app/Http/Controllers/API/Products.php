<?php

namespace App\Http\Controllers\API;

use App\Models\Mcategories;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\MproductsToFiles;
use App\Models\MproductsToImages;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\MsubCategories;

class Products extends Controller
{
    public function categoriesDropdown()
    {
        $categories = Mcategories::select('category_id','category_name')->orderBy('category_order', 'ASC')->where('_status', 1)->get();
        $list = [];
        foreach ( $categories as $category ) {
            array_push($list, [
                'category_id' => $category->category_id,
                'category_name' => $category->category_name,
                'subcatgories' => MsubCategories::where('category_id',$category->category_id)->select('subcategory_id','subcategory_name')
                                ->orderBy('subcategory_name')->where('_status',1)->get()
            ]);
        } 
        return response()->json($list);
    }

    public function subCategoriesDropdown(Request $request)
    {
        return response()->json(MsubCategories::where('category_id', $request->categoryid)->orderBy('category_order', 'ASC')->where('_status', 1)->get());
    }

    public function categorywiseproducts ($categoryid, $subcategoryid = null)
    {
        $query = DB::table('wq_products')
        ->if($categoryid, 'category_id', '=', "$categoryid")
        ->orIf($subcategoryid, 'subcategory_id', '=', "$subcategoryid")->select('product_id','product_slug','product_name')
        ->get();
        
        $list = [];
        foreach( $query as $row) {
            $image = MproductsToImages::where('product_id', $row->product_id)->select('product_image')->first()->product_image;
            array_push($list, [
                'id' => $row->product_id,
                'name' => $row->product_name,
                'slug' => $row->product_slug,
                'image' => $image
            ]);
        }
        return response()->json($list);

    }

    public function getHomePageProductsCards ($count)
    {
        $query = DB::table('wq_products')->select('product_id','product_slug','product_name','product_details')
        ->take($count)->get();
        
        $list = [];
        foreach( $query as $row) {
            $image = MproductsToImages::where('product_id', $row->product_id)->select('product_image')->first()->product_image;
            array_push($list, [
                'id' => $row->product_id,
                'name' => $row->product_name,
                'slug' => $row->product_slug,
                'details' => Str::limit($row->product_details, 30),
                'image' => $image
            ]);
        }
        return response()->json($list);

    }

    public function product_details($slug, $id)
    {
        $data = DB::table('wq_products')
        ->join('wq_categories', 'wq_products.category_id', '=', 'wq_categories.category_id')
        ->join('wq_subcategories', 'wq_products.subcategory_id', '=', 'wq_subcategories.subcategory_id')
        ->where('wq_products.product_id', $id)
        ->select('wq_products.*','wq_categories.category_name','wq_subcategories.subcategory_name')
        ->first();

        $productimgs = MproductsToImages::where('product_id', $id)->select('product_image')->get();
        $productfiles = MproductsToFiles::where('product_id', $id)->select('product_file')->get();
        $productinfo = json_decode($data->product_info, true);
        $list = [];
        array_push($list, [
            'category' => $data->category_name,
            'subcategory' => $data->subcategory_name,
            'name' => $data->product_name,
            'color' => $data->product_color,
            'model' => $data->product_model,
            'fueltype' => $data->product_fueltype,
            'details' => $data->product_details,
            'images' => $productimgs,
            'files' => $productfiles,
            'basic_model_number' => $productinfo['basic_model_number'],
            'basic_driving_method' => $productinfo['basic_driving_method'],
            'size_total_length' => $productinfo['size_total_length'],
            'size_overall_width' => $productinfo['size_overall_width'],
            'size_total_height' => $productinfo['size_total_height'],
            'size_wheel_base' => $productinfo['size_wheel_base'],
            'size_front_rear_suspension' => $productinfo['size_front_rear_suspension'],
            'size_wheel_track' => $productinfo['size_wheel_track'],
            'quality_total_weight' => $productinfo['quality_total_weight'],
            'quality_total_vehicle_mass' => $productinfo['quality_total_vehicle_mass'],
            'performance_maximum_speed' => $productinfo['performance_maximum_speed'],
            'performance_minimum_turning_diameter' => $productinfo['performance_minimum_turning_diameter'],
            'engine_engine_model' => $productinfo['engine_engine_model'],
            'engine_engine_type' => $productinfo['engine_engine_type'],
            'engine_bore_diameter' => $productinfo['engine_bore_diameter'],
            'engine_engine_stroke' => $productinfo['engine_engine_stroke'],
            'engine_engine_displacement' => $productinfo['engine_engine_displacement'],
            'engine_compression_ratio' => $productinfo['engine_compression_ratio'],
            'engine_rated_power' => $productinfo['engine_rated_power'],
            'engine_rated_speed' => $productinfo['engine_rated_speed'],
            'engine_maximum_torque' => $productinfo['engine_maximum_torque'],
            'engine_engine_fuel_type' => $productinfo['engine_engine_fuel_type'],
            'transmission_transmission_model' => $productinfo['transmission_transmission_model'],
            'transmission_control_method' => $productinfo['transmission_control_method'],
            'transmission_speed_ratio' => $productinfo['transmission_speed_ratio'],
            'clutch_clutch_type' => $productinfo['clutch_clutch_type'],
            'clutch_clutch_diameter' => $productinfo['clutch_clutch_diameter'],
            'clutch_manipulation_method' => $productinfo['clutch_manipulation_method'],
            'axle_front_axle' => $productinfo['axle_front_axle'],
            'axle_rear_axle' => $productinfo['axle_rear_axle'],
            'frame_structure_type' => $productinfo['frame_structure_type'],
            'frame_standard_sizes' => $productinfo['frame_standard_sizes'],
            'suspension_front_suspension_structure' => $productinfo['suspension_front_suspension_structure'],
            'suspension_rear_suspension_structure' => $productinfo['suspension_rear_suspension_structure'],
            'tyres_tyres_model' => $productinfo['tyres_tyres_model'],
            'braking_braking_type' => $productinfo['braking_braking_type'],
            'braking_driving_brake' => $productinfo['braking_driving_brake'],
            'braking_parking_brake' => $productinfo['braking_parking_brake'],
            'braking_auxiliary_brake' => $productinfo['braking_auxiliary_brake'],
            'steering_steering_type' => $productinfo['steering_steering_type'],
            'fuel_capacity' => $productinfo['fuel_capacity'],
            'fuel_material' => $productinfo['fuel_material'],
            'cabin_cabin_type' => $productinfo['cabin_cabin_type'],
            'electrical_vehicle_voltage' => $productinfo['electrical_vehicle_voltage'],
            'electrical_battery' => $productinfo['electrical_battery']
        ]);

        return response()->json($list);
    }
}
