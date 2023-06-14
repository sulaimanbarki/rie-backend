<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Mpolicy;
use Illuminate\Http\Request;

class Policies extends Controller
{
    public function policy_list()
    {
        return response()->json(Mpolicy::orderBy('policy_title')
            ->select('policy_title', 'policy_slug')->get());
    }
    public function policy_detail($slug)
    {
        return response()->json(Mpolicy::where('policy_slug', $slug)
            ->select('policy_title', 'policy_body')->first());
    }
}
