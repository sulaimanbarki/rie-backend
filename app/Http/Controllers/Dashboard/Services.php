<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Mservices;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MserviceToFiles;

class Services extends Controller
{
    public function index()
    {
        return view('dashboard.services.list');
    }
    public function renderList()
    {
        $query = Mservices::paginate(10);
        return response()->json($query);
    }
    public function create()
    {
        return view('dashboard.services.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'service_title' => 'required | unique:wq_services,service_name',
            //'service_icon'  => 'required',
            'service_summary' => 'required',
            'service_cover' => 'required',
            'service_details' => 'required'
        ]);

        Mservices::create([
            'service_name' => trim(ucwords($request->service_title)),
            'service_slug' => Str::slug(trim($request->service_title)),
            'service_icon' => 'icon',
            'service_excerpt' => trim($request->service_summary),
            'service_cover' => $request->service_cover,
            'service_details' => trim($request->service_details)
        ]);

        return redirect()->back()->with('msg', 'You have successfully created '. $request->service_title);
    }

    public function status_change($id, $status)
    {
        $service = Mservices::find($id);
        $service->_status = $status == 1 ? 0 : 1;
        $service->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }

    public function edit($id)
    {
        return view('dashboard.services.edit', [
            'service' => Mservices::find($id)
        ]);
    }

    public function filesUpload ($id)
    {
        $service = Mservices::find($id);
        return view('dashboard.services.add_service_files', [
            'id' => $service->service_id,
            'servicefiles' => MserviceToFiles::where('service_id', $service->service_id)->select('servicefile_id','servicefile_name', 'servicefile_link')->get()
        ]);
    }

    public function addFilesUpload ( Request $request )
    {
        $request->validate([
            'file' => 'required|mimes:csv,txt,xlx,xls,pdf,doc,docx|max:2048',
            'file_name' => 'required'
            ]);
            $fileName = time().'_'.$request->file->getClientOriginalName();
            $filePath = $request->file('file')->storeAs('uploads', $fileName, 'public');

            MserviceToFiles::create([
                'service_id' => $request->service_id,
                'servicefile_name' => $request->file_name,
                'servicefile_link' => env('APP_URL').'/storage/' . $filePath
            ]);

            return redirect()->back()->with('msg', 'Service file uploaded successfully');
    }

    public function deleteServiceFiles ($id)
    {

        $data = MserviceToFiles::find($id);
        if(file_exists($data->servicefile_link))
        {
            unlink($data->servicefile_link);
        }
        $data->delete();
        return redirect()->back()->with('msg', 'Service file deleted successfully');
    }

    public function update(Request $request)
    {
        $request->validate([
            'service_title' => 'required',
            'service_summary' => 'required',
            'service_cover' => 'required',
            'service_details' => 'required'
        ]);
        $service = Mservices::where('service_id',$request->serviceid)->first();
        $service->service_name = trim(ucwords($request->service_title));
        $service->service_slug = Str::slug(trim($request->service_title));
        $service->service_icon = 'icon';
        $service->service_excerpt = trim($request->service_summary);
        $service->service_cover = $request->service_cover;
        $service->service_details = trim($request->service_details);
        $service->save();
        return redirect()->back()->with('msg', 'Service has been updated.');
    }
    public function destroy($id)
    {
        Mservices::find($id)->delete();
        return response()->json(['msg' => 'The blog has been successfully deleted.']);
    }
}
