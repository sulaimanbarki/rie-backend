<?php

namespace App\Http\Controllers\API;

use App\Models\Mtheme;
use App\Models\Mevents;
use App\Models\Msliders;
use App\Models\Mcompanies;
use App\Models\MfooterLinks;
use Illuminate\Http\Request;
use App\Models\McustomerReviews;
use App\Http\Controllers\Controller;
use App\Models\Mcertificates;
use App\Models\MthemeContent;
use App\Models\MvideoContentSection;

class Common extends Controller
{
    public function getSliders()
    {
        return response()->json(Msliders::where('_status', 1)
        ->select('slider_title', 'slider_image','slider_description','slider_link')->orderBy('slider_order','ASC')->get());
    }

    public function getThemeInformation()
    {
        return response()->json(Mtheme::first());
    }

    public function getCompanies()
    {
        return response()->json(Mcompanies::where('_status', 1)->select('company_logo','company_link')->get());
    }

    public function getLatestSingleEvent()
    {
        $query = Mevents::where('_status', 1)->select('event_id','event_title', 'event_slug','event_cover','event_excerpt','event_date','event_time')->orderBy('created_at','DESC')->first();
        $list = [];
        
        array_push($list, [
            'event_id' => $query->event_id,
            'event_title' => $query->event_title,
            'event_slug' => $query->event_slug,
            'event_cover' => $query->event_cover,
            'event_excerpt' => $query->event_excerpt,
            'event_date' => date('d M, Y', strtotime($query->event_date)),
            'event_time' => date('h:i A', strtotime($query->event_time)),
        ]);
        
        return response()->json($list);
    }

    public function getEventsList()
    {
        $query = Mevents::where('_status', 1)->select('event_id','event_title', 'event_slug','event_cover','event_excerpt','event_date','event_time')->orderBy('created_at','DESC')->get();
        $list = [];
        foreach ( $query as $row )
        {
            array_push($list, [
                'event_id' => $row->event_id,
                'event_title' => $row->event_title,
                'event_slug' => $row->event_slug,
                'event_cover' => $row->event_cover,
                'event_excerpt' => $row->event_excerpt,
                'event_date' => date('d M, Y', strtotime($row->event_date)),
                'event_time' => date('h:i A', strtotime($row->event_time)),
            ]);
        }
        return response()->json($list);
    }

    public function getEventDetails($slug, $id)
    {
        $query = Mevents::find($id);
        $list = [];
        array_push($list, [
            'event_id' => $query->event_id,
            'event_title' => $query->event_title,
            'event_slug' => $query->event_slug,
            'event_cover' => $query->event_cover,
            'event_excerpt' => $query->event_excerpt,
            'event_description' => $query->event_description,
            'event_date' => date('d M, Y', strtotime($query->event_date)),
            'event_time' => date('h:i A', strtotime($query->event_time)),
        ]);
        
        return response()->json($list);
    }

    public function getVideoContent ()
    {
        $data = MvideoContentSection::first();
        $list = [];
        array_push($list, [
            'first_video_title' => $data->first_title,
            'second_video_title' => $data->second_title,
            'videosection_content' => $data->videosection_content,
            'video_cover' => $data->video_cover,
            'video_url' => $data->video_url,
            'firstsection_title' => $data->firstsection_title,
            'firstsection_content' => $data->firstsection_details,
            'secondsection_title' => $data->secondsection_title,
            'secondsection_content' => $data->secondsection_details,
            'thirdsection_title' => $data->thirdsection_title,
            'thirdsection_content' => $data->thirdsection_details,
        ]);
        return response()->json($list);
    }

    public function getFooterLinks()
    {
        $categorysection = MfooterLinks::where('_status', 1)->where('footer_linktype', 'Category Section')->select('footer_linkname','footer_link','footer_linktype')
        ->orderBy('footer_linkname')->get();

        $productsection = MfooterLinks::where('_status', 1)->where('footer_linktype', 'Product Section')->select('footer_linkname','footer_link','footer_linktype')
        ->orderBy('footer_linkname')->get();

        $quicklinks = MfooterLinks::where('_status', 1)->where('footer_linktype', 'Quick Link')->select('footer_linkname','footer_link','footer_linktype')
        ->orderBy('footer_linkname')->get();

        $list = [];
        array_push($list, [
            'category_section' => $categorysection,
            'product_section' => $productsection,
            'quick_links' => $quicklinks
        ]);

        return response()->json($list);
    }

    public function getCustomerReviews ()
    {
        
        $data = McustomerReviews::select('review_name', 'review_designation', 'review_image', 
        'review_content')->orderBy('created_at')->take(4)->get();
        return response()->json($data);
    }

    public function getCertificates ()
    {
        return response()->json(Mcertificates::select('certificate_file', 'certificate_name')->orderBy('created_at')->get());
    }

    public function getThemeContent ()
    {
        return response()->json(MthemeContent::select('themecontent_vision','themecontent_mission','themecontent_achivement','themecontent_products',
        'themecontent_services','themecontent_career','themecontent_contact','themecontent_about','themecontent_about_image','themecontent_groupof_companies')->first());
    }
    
}
