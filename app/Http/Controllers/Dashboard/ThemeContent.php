<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MthemeContent;

class ThemeContent extends Controller
{

    public function editThemeContent()
    {
        return view('dashboard.theme.edit-theme-content', [
            'themecontent' => MthemeContent::where('themecontent_id', 1)->first()
        ]);
    }

    public function updateThemeContent(Request $request)
    {
        $request->validate([
            'vision' => 'required',
            'mission'  => 'required',
            'achivement' => 'required',
            'products'  => 'required',
            'services' => 'required',
            'career'  => 'required',
            'contact' => 'required',
            'about' => 'required',
            'about_cover' => 'required',
            'groupofcompanies' => 'required'

        ]);
        $themecontent = MthemeContent::where('themecontent_id',$request->themecontentid)->first();
        $themecontent->themecontent_vision = trim($request->vision);
        $themecontent->themecontent_mission = trim($request->mission);
        $themecontent->themecontent_achivement = trim($request->achivement);
        $themecontent->themecontent_products = trim($request->products);
        $themecontent->themecontent_services = trim($request->services);
        $themecontent->themecontent_career = trim($request->career);
        $themecontent->themecontent_contact = trim($request->contact);
        $themecontent->themecontent_about = trim($request->about);
        $themecontent->themecontent_about_image = trim($request->about_cover);
        $themecontent->themecontent_groupof_companies = trim($request->groupofcompanies);
        $themecontent->save();
        return redirect()->back()->with('msg', 'Theme content has been updated');
    }
}
