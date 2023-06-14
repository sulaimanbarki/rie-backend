<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Mblogs;
use Illuminate\Support\Str;

class Blogs extends Controller
{
    public function bloglist()
    {
        $blogs = Mblogs::orderBy('created_at', 'DESC')->get();
        $list = [];
        foreach ( $blogs as $row ) {
            array_push($list, [
                'id' => $row->blog_id,
                'code' => $row->blog_code,
                'title' => Str::limit($row->blog_title, 15),
                'slug' => $row->blog_slug,
                'cover' => $row->blog_image,
                'details' => Str::limit($row->blog_excerpt, 25)
            ]);
        }
        return response()->json($list);
    }

    public function blogCards($count)
    {
        $blogs = Mblogs::orderBy('created_at', 'DESC')->take($count)->get();
        $list = [];
        foreach ( $blogs as $row ) {
            array_push($list, [
                'id' => $row->blog_id,
                'code' => $row->blog_code,
                'title' => Str::limit($row->blog_title, 15),
                'slug' => $row->blog_slug,
                'cover' => $row->blog_image,
                'details' => Str::limit($row->blog_excerpt, 25)
            ]);
        }
        return response()->json($list);
    }
    public function blog_details($slug, $code)
    {
        $details = Mblogs::where('blog_code', $code)->where('blog_slug', $slug)->first();
        return response()->json($details);
    }
}
