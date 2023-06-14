<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Mproducts;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\MproductsToFiles;
use App\Models\MproductsToImages;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class Products extends Controller
{
    private $pagination = 25;

    public function index()
    {
        return view('dashboard.products.list');
    }
    public function renderList()
    {
        $products = DB::table('wq_products')
        ->join('wq_categories', 'wq_products.category_id', '=', 'wq_categories.category_id')
        ->join('wq_subcategories', 'wq_products.subcategory_id', '=', 'wq_subcategories.subcategory_id')
        ->select('wq_products.*','wq_categories.category_name','wq_subcategories.subcategory_name')
        ->orderBy('wq_products.product_name')->paginate($this->pagination);

        return response()->json($products);
    }
    public function create()
    {
        return view('dashboard.products.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'category' => 'required',
            'subcategory' => 'required',
            'product_title' => 'required | unique:wq_products,product_name',
            // 'color' => 'required',
        ]);

        Mproducts::create([
            'category_id' => $request->category,
            'subcategory_id' => $request->subcategory,
            'product_name' => trim(ucwords($request->product_title)),
            'product_slug' => Str::slug(trim($request->product_title)),
            'product_color' => trim($request->color),
            'product_model' => trim($request->model),
            'product_fueltype' => trim($request->fueltype),
            'product_details' => trim($request->description),
            'product_info' => json_encode([
                'basic_model_number' => $request->model_number ? $request->model_number : '',
                'basic_driving_method' => $request->driving_method ? $request->driving_method : '',
                'size_total_length' => $request->total_length ? $request->total_length : '',
                'size_overall_width' => $request->overall_width ? $request->overall_width : '',
                'size_total_height' => $request->total_height ? $request->total_height : '',
                'size_wheel_base' => $request->wheel_base ? $request->wheel_base :'',
                'size_front_rear_suspension' => $request->front_rear_suspension ? $request->front_rear_suspension : '',
                'size_wheel_track' => $request->wheel_track ? $request->wheel_track : '',
                'quality_total_weight' => $request->total_weight ? $request->total_weight : '',
                'quality_total_vehicle_mass' => $request->total_vehicle_mass ? $request->total_vehicle_mass : '',
                'performance_maximum_speed' => $request->maximum_speed ? $request->maximum_speed : '',
                'performance_minimum_turning_diameter' => $request->minimum_turning_diameter ? $request->minimum_turning_diameter : '',
                'engine_engine_model' => $request->engine_model ? $request->engine_model : '',
                'engine_engine_type' => $request->engine_type ? $request->engine_type : '',
                'engine_bore_diameter' => $request->bore_diameter ? $request->bore_diameter : '',
                'engine_engine_stroke' => $request->engine_stroke ? $request->engine_stroke : '',
                'engine_engine_displacement' => $request->engine_displacement ? $request->engine_displacement : '',
                'engine_compression_ratio' => $request->compression_ratio ? $request->compression_ratio :'',
                'engine_rated_power' => $request->rated_power ? $request->rated_power : '',
                'engine_rated_speed' => $request->rated_speed ? $request->rated_speed : '',
                'engine_maximum_torque' => $request->maximum_torque ? $request->maximum_torque : '',
                'engine_engine_fuel_type' => $request->engine_fuel_type ? $request->engine_fuel_type : '',
                'transmission_transmission_model' => $request->transmission_model ? $request->transmission_model : '',
                'transmission_control_method' => $request->control_method ? $request->control_method : '',
                'transmission_speed_ratio' => $request->speed_ratio ? $request->speed_ratio : '',
                'clutch_clutch_type' => $request->clutch_type ? $request->clutch_type : '',
                'clutch_clutch_diameter' => $request->clutch_diameter ? $request->clutch_diameter : '',
                'clutch_manipulation_method' => $request->manipulation_method ? $request->manipulation_method : '',
                'axle_front_axle' => $request->front_axle ? $request->front_axle : '',
                'axle_rear_axle' => $request->rear_axle ? $request->rear_axle : '',
                'frame_structure_type' => $request->structure_type ? $request->structure_type : '',
                'frame_standard_sizes' => $request->standard_sizes ? $request->standard_sizes : '',
                'suspension_front_suspension_structure' => $request->front_suspension_structure ? $request->front_suspension_structure : '',
                'suspension_rear_suspension_structure' => $request->rear_suspension_structure ? $request->rear_suspension_structure : '',
                'tyres_tyres_model' => $request->tyres_model ? $request->tyres_model : '',
                'braking_braking_type' => $request->braking_type ? $request->braking_type : '',
                'braking_driving_brake' => $request->driving_brake ? $request->driving_brake : '',
                'braking_parking_brake' => $request->parking_brake ? $request->parking_brake : '',
                'braking_auxiliary_brake' => $request->auxiliary_brake ? $request->auxiliary_brake : '',
                'steering_steering_type' => $request->steering_type ? $request->steering_type : '',
                'fuel_capacity' => $request->capacity ? $request->capacity : '',
                'fuel_material' => $request->material ? $request->material : '',
                'cabin_cabin_type' => $request->cabin_type ? $request->cabin_type : '',
                'electrical_vehicle_voltage' => $request->vehicle_voltage ? $request->vehicle_voltage : '',
                'electrical_battery' => $request->battery ? $request->battery : ''
            ])
        ]);

        return response()->json(['msg' => $request->product_title . ' has been created successfully']);
    }

    public function status_change($id, $status)
    {
        $product = Mproducts::find($id);
        $product->_status = $status == 1 ? 0 : 1;
        $product->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }

    public function edit($id)
    {
        $product = Mproducts::find($id);
        return view('dashboard.products.edit', [
            'id' => $product->product_id
        ]);
    }

    public function editProductJs( $id )
    {
        $product = DB::table('wq_products')
        ->join('wq_categories', 'wq_products.category_id', '=', 'wq_categories.category_id')
        ->join('wq_subcategories', 'wq_products.subcategory_id', '=', 'wq_subcategories.subcategory_id')
        ->where('wq_products.product_id', $id)->first();

        $productinfo = json_decode($product->product_info, true);
        $list = [];
        array_push($list,[
            'category_id' => $product->category_id,
            'category_name' => $product->category_name,
            'subcategory_id' => $product->subcategory_id,
            'subcategory_name' => $product->subcategory_name,
            'product_name' => $product->product_name,
            'product_details' => $product->product_details,
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
        return response()->json($list[0]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'product_title' => 'required',
        ]);

        $product = Mproducts::where('product_id',$request->productid)->first();
        if ($request->category)
        {
            $product->category_id = $request->category;
        }
        if ($request->subcategory)
        {
            $product->subcategory_id = $request->subcategory;
        }
        $product->product_name = trim(ucwords($request->product_title));
        $product->product_slug = Str::slug(trim($request->product_title));
        $product->product_details = trim($request->description);
        $product->product_info = json_encode([
                'basic_model_number' => $request->model_number,
                'basic_driving_method' => $request->driving_method,
                'size_total_length' => $request->total_length,
                'size_overall_width' => $request->overall_width,
                'size_total_height' => $request->total_height,
                'size_wheel_base' => $request->wheel_base,
                'size_front_rear_suspension' => $request->front_rear_suspension,
                'size_wheel_track' => $request->wheel_track,
                'quality_total_weight' => $request->total_weight,
                'quality_total_vehicle_mass' => $request->total_vehicle_mass,
                'performance_maximum_speed' => $request->maximum_speed,
                'performance_minimum_turning_diameter' => $request->minimum_turning_diameter,
                'engine_engine_model' => $request->engine_model,
                'engine_engine_type' => $request->engine_type,
                'engine_bore_diameter' => $request->bore_diameter,
                'engine_engine_stroke' => $request->engine_stroke,
                'engine_engine_displacement' => $request->engine_displacement,
                'engine_compression_ratio' => $request->compression_ratio,
                'engine_rated_power' => $request->rated_power,
                'engine_rated_speed' => $request->rated_speed,
                'engine_maximum_torque' => $request->maximum_torque,
                'engine_engine_fuel_type' => $request->engine_fuel_type,
                'transmission_transmission_model' => $request->transmission_model,
                'transmission_control_method' => $request->control_method,
                'transmission_speed_ratio' => $request->speed_ratio,
                'clutch_clutch_type' => $request->clutch_type,
                'clutch_clutch_diameter' => $request->clutch_diameter,
                'clutch_manipulation_method' => $request->manipulation_method,
                'axle_front_axle' => $request->front_axle,
                'axle_rear_axle' => $request->rear_axle,
                'frame_structure_type' => $request->structure_type,
                'frame_standard_sizes' => $request->standard_sizes,
                'suspension_front_suspension_structure' => $request->front_suspension_structure,
                'suspension_rear_suspension_structure' => $request->rear_suspension_structure,
                'tyres_tyres_model' => $request->tyres_model,
                'braking_braking_type' => $request->braking_type,
                'braking_driving_brake' => $request->driving_brake,
                'braking_parking_brake' => $request->parking_brake,
                'braking_auxiliary_brake' => $request->auxiliary_brake,
                'steering_steering_type' => $request->steering_type,
                'fuel_capacity' => $request->capacity,
                'fuel_material' => $request->material,
                'cabin_cabin_type' => $request->cabin_type,
                'electrical_vehicle_voltage' => $request->vehicle_voltage,
                'electrical_battery' => $request->battery
        ]);
        $product->save();

        return response()->json(['msg' => $request->product_title . ' has been update successfully']);
    }
    
    public function destroy($id)
    {
        Mproducts::find($id)->delete();
        return response()->json(['msg' => 'The product has been successfully deleted.']);
    }

    public function ProductImages($id)
    {
        $product = Mproducts::find($id);
        return view('dashboard.products.add_product_images', [
            'id' => $product->product_id,
            'productimages' => MproductsToImages::where('product_id', $product->product_id)->select('productimages_id','product_image')->get()
        ]);
    }

    public function addProductImages(Request $request)
    {
        $request->validate([
            'product_id' => 'required',
            'product_image' => 'required'
        ]);

        MproductsToImages::create([
            'product_id' => $request->product_id,
            'product_image' => $request->product_image,
        ]);

        return redirect()->back()->with('msg', 'Product image added successfully');
    }

    public function deleteProductImages($id)
    {
        MproductsToImages::find($id)->delete();
        return redirect()->back()->with('msg', 'Product image deleted successfully');
    }

    public function filesUpload ($id)
    {
        $product = Mproducts::find($id);
        return view('dashboard.products.add_product_files', [
            'id' => $product->product_id,
            'productfiles' => MproductsToFiles::where('product_id', $product->product_id)->select('productfile_id','product_file')->get()
        ]);
    }

    public function addFilesUpload ( Request $request )
    {
        $request->validate([
            'file' => 'required|mimes:csv,txt,xlx,xls,pdf,doc,docx|max:2048'
            ]);
            $fileName = time().'_'.$request->file->getClientOriginalName();
            $filePath = $request->file('file')->storeAs('uploads', $fileName, 'public');

            MproductsToFiles::create([
                'product_id' => $request->product_id,
                'product_file' => env('APP_URL').'/storage/' . $filePath
            ]);

            return redirect()->back()->with('msg', 'Product file uploaded successfully');
    }

    public function deleteProductFiles ($id)
    {

        $data = MproductsToFiles::find($id);
        if(file_exists($data->product_file))
        {
            unlink($data->product_file);
        }
        $data->delete();
        return redirect()->back()->with('msg', 'Product file deleted successfully');
    }
}
