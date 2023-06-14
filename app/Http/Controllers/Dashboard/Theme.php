<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Mtheme;
use App\Models\Mcompanies;
use Illuminate\Http\Request;
use App\Models\Mcertificates;
use App\Models\McontactInformation;
use App\Http\Controllers\Controller;
use App\Models\MvideoContentSection;

class Theme extends Controller
{

    public function editTheme()
    {
        return view('dashboard.theme.edit-theme', [
            'theme' => Mtheme::where('theme_id', 1)->first()
        ]);
    }

    public function updateTheme(Request $request)
    {
        $request->validate([
            'theme_title' => 'required',
            'theme_logo'  => 'required',
            'theme_about' => 'required'
        ]);
        
        $theme = Mtheme::where('theme_id',$request->themeid)->first();
        $theme->theme_title = trim($request->theme_title);
        $theme->theme_logo = $request->theme_logo;
        $theme->theme_instagram = $request->theme_instagram;
        $theme->theme_facebook = $request->theme_facebook;
        $theme->theme_twitter = $request->theme_twitter;
        $theme->theme_linkdin = $request->theme_linkdin;
        $theme->theme_about = $request->theme_about;
        $theme->theme_email = $request->theme_email;
        $theme->theme_copyright = $request->theme_copyright;
        $theme->theme_phone = $request->theme_phone;
        $theme->theme_address = $request->theme_address;

        $theme->save();
        return redirect()->back()->with('msg', 'Theme has been updated.');
    }

    public function editWeOffer()
    {
        return view('dashboard.theme.edit-weoffer', [
            'theme' => Mtheme::where('theme_id', 1)->first()
        ]);
    }

    public function updateWeOffer(Request $request)
    {
        $request->validate([
            'theme_weoffer_content' => 'required',
            'theme_weoffer_image'  => 'required',
            'theme_weoffer_link' => 'required'
        ]);
        
        $theme = Mtheme::where('theme_id',$request->themeid)->first();
        $theme->theme_weoffer_title = trim($request->theme_weoffer_title);
        $theme->theme_weoffer_content = trim($request->theme_weoffer_content);
        $theme->theme_weoffer_image = trim($request->theme_weoffer_image);
        $theme->theme_weoffer_link = $request->theme_weoffer_link;
        $theme->save();
        return redirect()->back()->with('msg', 'Theme we offer has been updated.');
    }

    public function addCompany()
    {
        return view('dashboard.theme.add-companies',[
            'companies' => Mcompanies::get()
        ]);
    }

    public function storeCompany(Request $request)
    {
        $request->validate([
            'company_name' => 'required',
            'company_link'  => 'required',
            'company_logo' => 'required'
        ]);
        
        Mcompanies::create([
            'company_name' => $request->company_name, 
            'company_link' => $request->company_link,
            'company_logo' => $request->company_logo
        ]);
        return redirect()->back()->with('msg', 'You have successfully created '. $request->company_name);

    }

    public function deleteCompany($id)
    {
        Mcompanies::find($id)->delete();
        return redirect()->back()->with('msg', 'Company detailes deleted successfully');
    }

    public function editVideoSection()
    {
        return view('dashboard.theme.edit-video-theme-section',[
            'videocontent' => MvideoContentSection::first()
        ]);
    }

    public function updateVideoSection(Request $request)
    {
        $request->validate([
            'first_title' => 'required',
            'second_title'  => 'required',
            'videosection_content' => 'required',
            'video_cover' => 'required',
            'video_url' => 'required',
        ]);
       
        $videocontent = MvideoContentSection::where('videosection_id',$request->videosectionid)->first();
        $videocontent->first_title = $request->first_title;
        $videocontent->second_title = $request->second_title;
        $videocontent->videosection_content = nl2br($request->videosection_content);
        $videocontent->video_cover = $request->video_cover;
        $videocontent->video_url = $request->video_url;
        $videocontent->firstsection_title = $request->firstsection_title;
        $videocontent->firstsection_details = $request->firstsection_details;
        $videocontent->secondsection_title = $request->secondsection_title;
        $videocontent->secondsection_details = $request->secondsection_details;
        $videocontent->thirdsection_title = $request->thirdsection_title;
        $videocontent->thirdsection_details = $request->thirdsection_details;
        $videocontent->save();
        return redirect()->back()->with('msg', 'Video content has been updated successfully');
    }

    public function addCertificates()
    {
        return view('dashboard.theme.add-certificates',[
            'certificates' => Mcertificates::get()
        ]);
    }

    public function storeCertificates(Request $request)
    {
        $request->validate([
            'certificate_name' => 'required',
            'certificate_image'  => 'required',
        ]);
        
        Mcertificates::create([
            'certificate_name' => $request->certificate_name, 
            'certificate_file' => $request->certificate_image,
        ]);
        return redirect()->back()->with('msg', 'You have successfully uploaded '. $request->certificate_name);

    }

    public function deleteCertificates($id)
    {
        Mcertificates::find($id)->delete();
        return redirect()->back()->with('msg', 'Company certificate deleted successfully');
    }

}
