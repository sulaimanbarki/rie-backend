<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//common
Route::group(['namespace' => 'API'],function () {
    //services 
    Route::get('services-list', 'Services@renderList');
    Route::get('service-details/{slug}/{id}', 'Services@service_details');
    //jobs
    Route::get('jobs-list', 'Jobs@jobs_list');
    Route::get('job-detailes/{id}', 'Jobs@jobs_details');
    Route::post('job-apply', 'Jobs@jobApply');
    //contact
    Route::post('contact-us', 'Contact@store');
    Route::get('contact-information', 'Contact@contactInformation');
    Route::get('contact-information/{branch}', 'Contact@contactInformationSingle');
    //products
    Route::get('categories-dropdown', 'Products@categoriesDropdown');
    Route::post('subcategory-dropdown', 'Products@subCategoriesDropdown');
    Route::get('category-wise-products/{categoryid}/{subcategoryid?}', 'Products@categorywiseproducts');
    Route::get('get-product-cards/{count}', 'Products@getHomePageProductsCards');
    Route::get('product/{slug}/{id}', 'Products@product_details');
    //common
    Route::get('get-sliders', 'Common@getSliders');
    Route::get('get-theme-information', 'Common@getThemeInformation');
    Route::get('get-companies', 'Common@getCompanies');
    Route::get('get-latest-single-event', 'Common@getLatestSingleEvent');
    Route::get('get-events-list', 'Common@getEventsList');
    Route::get('get-event-details/{slug}/{id}', 'Common@getEventDetails');
    Route::get('get-video-content', 'Common@getVideoContent');
    Route::get('get-footer-links', 'Common@getFooterLinks');
    Route::get('get-customer-reviews', 'Common@getCustomerReviews');
    Route::get('get-company-certificates', 'Common@getCertificates');
    Route::get('get-theme-content', 'Common@getThemeContent');
    //blog
    Route::get('get-blog-list', 'Blogs@bloglist');
    Route::get('get-blog-cards/{count}', 'Blogs@blogCards');
    Route::get('get-blog-details/{slug}/{code}', 'Blogs@blog_details');
});