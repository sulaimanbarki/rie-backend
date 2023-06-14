<?php

namespace App\Http\Controllers\API;

use App\Mail\ContactEmail;
use Illuminate\Http\Request;
use App\Models\McontactInformation;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class Contact extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'message' => 'required',
        ]);
        try {
            Mail::to('wqsoftwares@gmail.com')
                ->cc(['kaseng87@gmail.com'])
                ->send(new ContactEmail($request->name, 
                    $request->email,
                    $request->number,
                    $request->message));
            return response()->json(['msg' => 'Email has been send to the concern department.']);
        } catch ( \Exception $e ) {
            return response()->json(['msgErr' => 'Email error occured']);
        }
    }

    public function contactInformation()
    {
        $getfirstBranch = McontactInformation::where('_status', 1)
        ->select('contact_title', 'contact_branch','contact_address','contact_phone','contact_mobile','contact_fax','contact_email')->orderBy('contact_branch')->first();
        $getbranches = McontactInformation::select('contact_branch')->orderBy('contact_branch')->get();
        $list = [];
        array_push($list, [
            'firstbranch' => $getfirstBranch,
            'branches' => $getbranches
        ]);
        return response()->json($list);
    }

    public function contactInformationSingle($branch)
    {
        return response()->json(McontactInformation::where('contact_branch', $branch)->where('_status', 1)->orderBy('contact_branch')->first());
    }
    

    
}
