<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\McontactInformation;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class ContactInformation extends Controller
{
    public function index()
    {
        return view('dashboard.contactinformation.list');
    }
    public function renderList()
    {
        $query = McontactInformation::paginate(10);
        return response()->json($query);
    }
    public function create()
    {
        return view('dashboard.contactinformation.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'contact_title' => 'required',
            'contact_branch' => 'required',
            'contact_address' => 'required',
            'contact_phone' => 'required',
            'contact_mobile' => 'required',
            'contact_fax' => 'required',
            'contact_email' => 'required',
            
        ]);
        McontactInformation::create([			
            'contact_title' => $request->contact_title,
            'contact_branch' => $request->contact_branch,
            'contact_address' => $request->contact_address,
            'contact_phone' => $request->contact_phone,
            'contact_mobile' => $request->contact_mobile,
            'contact_fax' => $request->contact_fax,
            'contact_email' => $request->contact_email
        ]);

        return redirect()->back()->with('msg', 'You have successfully created, '. $request->contact_title);
    }

    public function status_change($id, $status)
    {
        $category = McontactInformation::find($id);
        $category->_status = $status == 1 ? 0 : 1;
        $category->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }

    public function edit($id)
    {
        return view('dashboard.contactinformation.edit', [
            'contact' => McontactInformation::find($id)
        ]);
    }
    public function update(Request $request)
    {
        $request->validate([
            'contact_title' => 'required',
            'contact_branch' => 'required',
            'contact_address' => 'required',
            'contact_phone' => 'required',
            'contact_mobile' => 'required',
            'contact_fax' => 'required',
            'contact_email' => 'required',
        ]);
        $contact = McontactInformation::where('contact_id',$request->contactid)->first();
        $contact->contact_title = $request->contact_title;
        $contact->contact_branch = $request->contact_branch;
        $contact->contact_address = $request->contact_address;
        $contact->contact_phone = $request->contact_phone;
        $contact->contact_mobile = $request->contact_mobile;
        $contact->contact_fax = $request->contact_fax;
        $contact->contact_email = $request->contact_email;
        $contact->save();
        return redirect()->back()->with('msg', $request->contact_title.' has been updated');
    }

    public function destroy($id)
    {
        $category = McontactInformation::find($id);
        $category->_status == 0;
        $category->save();
        return response()->json(['msg' => 'The category has been successfully deleted']);
    }
}
