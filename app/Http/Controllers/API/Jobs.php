<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Mjobs;
use App\Models\MjobsToApply;
use Illuminate\Http\Request;

class Jobs extends Controller
{
    public function jobs_list()
    {
        return response()->json(Mjobs::orderBy('created_at', 'DESC')->where('_status', 1)->get());
    }
    public function jobs_details($id)
    {
        return response()->json(Mjobs::find($id));
    }

    public function jobApply (Request $request)
    {
        $request->validate([
            'applicant_fullname' => 'required',
            'applicant_email' => 'required',
            'applicant_mobile' => 'required',
            'applicant_coverletter' => 'required',
            'applicant_cv' => 'required',
            'jobid' => 'required',
        ],[
            'jobid.required' => 'Job is missing'
        ]);

        MjobsToApply::create([
            'job_id' => $request->jobid, 
            'user_fullname' => $request->applicant_fullname,
            'user_email' => $request->applicant_email,
            'user_mobile' => $request->applicant_mobile,
            'user_coverletter' => $request->applicant_coverletter,
            'user_cv' => 'cv',
        ]);

        return response()->json(['msg' => 'Details submissted successfully']);
    }
}
