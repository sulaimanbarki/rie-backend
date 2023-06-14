<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Mblogs;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Blogs extends Controller
{
    public function index()
    {
        return view('dashboard.blogs.list');
    }
    public function renderList()
    {
        $query = Mblogs::paginate(10);
        return response()->json($query);
    }
    public function create()
    {
        return view('dashboard.blogs.create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'blog_title' => 'required | unique:wq_blogs,blog_title',
            'blog_excerpt'  => 'required',
            'blog_details' => 'required',
            'blog_image' => 'required'
        ]);
        Mblogs::create([
            'blog_title' => trim(ucwords($request->blog_title)),
            'blog_code' => substr(crc32(uniqid()), 0,9),
            'blog_excerpt' => trim($request->blog_excerpt),
            'blog_details' => trim($request->blog_details),
            'blog_image' => $request->blog_image,
            'blog_slug' => Str::slug(trim($request->blog_title))
        ]);

        return redirect()->back()->with('msg', 'You have successfully submited the blog');
    }
    public function status_change($id, $status)
    {
        $role = Mblogs::find($id);
        $role->blog_status = $status == 1 ? 0 : 1;
        $role->save();
        return response()->json(['msg' => 'Status has been updated.']);
    }
    public function edit($id)
    {
        return view('dashboard.blogs.edit', [
            'blog' => Mblogs::find($id)
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'blog_title' => 'required',
            'blog_excerpt'  => 'required',
            'blog_details' => 'required',
            'blog_image' => 'required'
        ]);
        $blog = Mblogs::find($id);
        $blog->blog_title = trim(ucwords($request->blog_title));
        $blog->blog_excerpt = $request->blog_excerpt;
        $blog->blog_details = $request->blog_details;
        $blog->blog_image = $request->blog_image;
        $blog->save();
        return redirect()->back()->with('msg', 'Blog has been updated.');
    }
    public function destroy($id)
    {
        Mblogs::find($id)->delete();
        return response()->json(['msg' => 'The blog has been successfully deleted.']);
    }
}
