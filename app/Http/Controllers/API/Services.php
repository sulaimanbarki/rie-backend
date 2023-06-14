<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Mservices;

class Services extends Controller
{
    public function renderList()
    {
        return response()->json(Mservices::orderBy('created_at', 'DESC')->where('_status', 1)->get());
    }

    public function service_details($slug, $id)
    {
        return response()->json(Mservices::find($id));
    }
}
