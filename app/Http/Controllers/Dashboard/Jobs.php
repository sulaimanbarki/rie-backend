<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Mjobs;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class Jobs extends Controller
{
    public function index()
    {
        return view('dashboard.jobs.list');
    }
    public function renderList()
    {
        $query = Mjobs::paginate(10);
        return response()->json($query);
    }
    public function create()
    {
        return view('dashboard.jobs.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'job_title' => 'required',
            'job_experience' => 'required',
            'job_education' => 'required',
            'job_detail' => 'required',
            'job_last_date' => 'required',
            'job_location'  => 'required',
            'job_type' => 'required',
            'job_features' => 'required',
            'job_benifits' => 'required',
            
        ]);
        Mjobs::create([
            'job_title' => trim(ucwords($request->job_title)),
            'job_slug' => Str::slug(trim($request->job_title)),
            'job_experience' => trim($request->job_experience),
            'job_education' => trim($request->job_education),
            'job_detail' => $request->job_detail,
            'job_lastdate' => date('Y-m-d', strtotime($request->job_last_date)),
            'job_location' => trim($request->job_location),
            'job_type' => trim($request->job_type),
            'job_features' => trim($request->job_features),
            'job_benefits' => $request->job_benifits
        ]);

        return redirect()->back()->with('msg', 'You have successfully submited the job, '. $request->job_title);
    }
    public function status_change($id, $status)
    {
        $job = Mjobs::find($id);
        $job->_status = $status == 1 ? 0 : 1;
        $job->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }
    public function edit($id)
    {
        return view('dashboard.jobs.edit', [
            'job' => Mjobs::find($id)
        ]);
    }
    public function update(Request $request)
    {
        $request->validate([
            'job_title' => 'required',
            'job_experience' => 'required',
            'job_education' => 'required',
            'job_detail' => 'required',
            'job_last_date' => 'required',
            'job_location'  => 'required',
            'job_type' => 'required',
            'job_features' => 'required',
            'job_benifits' => 'required',
        ]);
        $job = Mjobs::where('job_id',$request->jobid)->first();
        $job->job_title = trim(ucwords($request->job_title));
        $job->job_slug = Str::slug(trim($request->job_title));
        $job->job_experience = $request->job_experience;
        $job->job_education = $request->job_education;
        $job->job_lastdate = date('Y-m-d', strtotime($request->job_last_date));
        $job->job_location = trim($request->job_location);
        $job->job_type = trim($request->job_type);
        $job->job_features = trim($request->job_features);
        $job->job_benefits = $request->job_benifits;
        $job->job_detail = $request->job_detail;
        $job->save();
        return redirect()->back()->with('msg',  $request->job_title.' job details has been updated successfully');
    }

    public function destroy($id)
    {
        $job = Mjobs::find($id);
        $job->_status == 0;
        $job->save();
        return response()->json(['msg' => 'The job has been de-activated successfully']);
    }
}
