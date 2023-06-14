<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\McustomerReviews;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CustomerReviews extends Controller
{
    public function index()
    {
        return view('dashboard.reviews.list');
    }
    public function renderList()
    {
        $query = McustomerReviews::paginate(10);
        return response()->json($query);
    }
    public function create()
    {
        return view('dashboard.reviews.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'designation'  => 'required',
            'image' => 'required',
            'content' => 'required'
        ]);

        McustomerReviews::create([
            'review_name' => trim(ucwords($request->name)),
            'review_designation' => trim($request->designation),
            'review_image' => trim($request->image),
            'review_content' => $request->content
        ]);

        return redirect()->back()->with('msg', 'Review have successfully submited the blog');
    }
    public function status_change($id, $status)
    {
        $role = McustomerReviews::find($id);
        $role->_status = $status == 1 ? 0 : 1;
        $role->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }
    public function edit($id)
    {
        return view('dashboard.reviews.edit', [
            'review' => McustomerReviews::find($id)
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'designation'  => 'required',
            'image' => 'required',
            'content' => 'required'
        ]);
        $review = McustomerReviews::find($id);
        $review->review_name = trim(ucwords($request->name));
        $review->review_designation = trim($request->designation);
        $review->review_image = trim($request->image);
        $review->review_content = $request->content;
        $review->save();
        return redirect()->back()->with('msg', 'Review has been updated.');
    }
    public function destroy($id)
    {
        McustomerReviews::find($id)->delete();
        return response()->json(['msg' => 'The review has been successfully deleted.']);
    }
}
