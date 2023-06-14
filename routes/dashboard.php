<?php

use Illuminate\Support\Facades\Route;
//, 'modulescheck'
Route::group(['namespace' => 'Dashboard', 'middleware' => ['auth'] ], function () {
    //home main screen
    Route::get('/home', 'Home@index');
    //Roles Management
    Route::resource('roles-mgt', 'Roles', [ 'except' => 'edit' ]);
    Route::get('/role-js', 'Roles@list_render');
    Route::get('role_status/{id}/{status}', 'Roles@status_change');
    Route::get('/get-role-base-modules/{roleId}', 'Roles@get_roles_modules');
    Route::delete('/remove-link-role/{roleLinkId}', 'Roles@remove_link_from_role');
    Route::delete('/remove-module-role/{rolemoduleid}', 'Roles@remove_module_links_from_role');
    Route::post('/assign-modules', 'Roles@assign_module_link_role');
    // Admin User Management
    Route::resource('team-mgt', 'UserMgt');
    Route::post('update-team/{team_id}', 'UserMgt@update');
    Route::get('team-js-list/{pagination?}', 'UserMgt@render_list');
    Route::put('user-password-update', 'UserMgt@change_password');
    Route::get('user-status-update/{userid}/{status}', 'UserMgt@change_status');
    // Module management
    Route::resource('modules-mgt', 'Modules', ['except' => ['show']]);
    Route::get('modules-js', 'Modules@render_list');
    Route::get('module-based-links/{moduleId}', 'Modules@render_links');
    Route::post('module-add-link/{moduleId}', 'Modules@add_single_link');
    Route::delete('delete-a-link/{linkId}', 'Modules@delete_a_link');
    //Policies
    Route::resource('policies-mgt', 'Policies');
    Route::get('policy-js', 'Policies@renderList');
    Route::get('policy_status/{id}/{status}', 'Policies@status_change');
    //Blogs
    Route::resource('blogs-mgt', 'Blogs');
    Route::get('blog-js', 'Blogs@renderList');
    Route::get('blog_status/{id}/{status}', 'Blogs@status_change');
    //Jobs
    Route::resource('jobs-mgt', 'Jobs');
    Route::get('job-js', 'Jobs@renderList');
    Route::post('job-update', 'Jobs@update');
    Route::get('job_status/{id}/{status}', 'Jobs@status_change');
    //Services
    Route::resource('services-mgt', 'Services');
    Route::get('services-js', 'Services@renderList');
    Route::post('services-mgt-update','Services@update');
    Route::get('service-files/{id}', 'Services@filesUpload');
    Route::post('add-service-files', 'Services@addFilesUpload');
    Route::get('delete-service-files/{id}', 'Services@deleteServiceFiles');
    Route::get('services_status/{id}/{status}', 'Services@status_change');
    //Categories
    Route::resource('categories-mgt', 'Categories');
    Route::get('categories-js', 'Categories@renderList');
    Route::post('category-update', 'Categories@update');
    Route::get('category_status/{id}/{status}', 'Categories@status_change');
    //Subcategories
    Route::resource('sub-categories-mgt', 'SubCategories');
    Route::get('sub-categories-js', 'SubCategories@renderList');
    Route::post('sub-category-update', 'SubCategories@update');
    Route::get('sub_category_status/{id}/{status}', 'SubCategories@status_change');
    //Products
    Route::resource('products-mgt', 'Products');
    Route::get('products-js', 'Products@renderList');
    Route::get('product-edit-js/{id}', 'Products@editProductJs');
    Route::post('product-update', 'Products@update');
    Route::get('product-images/{id}', 'Products@ProductImages');
    Route::post('add-product-images', 'Products@addProductImages');
    Route::get('delete-product-image/{id}', 'Products@deleteProductImages');
    Route::get('product-files/{id}', 'Products@filesUpload');
    Route::post('add-product-files', 'Products@addFilesUpload');
    Route::get('delete-product-files/{id}', 'Products@deleteProductFiles');
    Route::get('product_status/{id}/{status}', 'Products@status_change');
    //Slider
    Route::resource('slider-mgt', 'Sliders');
    Route::get('slider-js', 'Sliders@renderList');
    Route::post('slider-update', 'Sliders@update');
    Route::get('slider_status/{id}/{status}', 'Sliders@status_change');

    //Menus
    Route::resource('menus-mgt', 'Menus');
    Route::get('menu-js', 'Menus@renderList');

    //Pages
    Route::resource('pages-mgt', 'Pages');
    Route::get('page-js', 'Pages@renderList');
    Route::post('update-page/{page_id}', 'Pages@update');

    //Events
    Route::resource('event-mgt', 'EventsManagement');
    Route::get('event-js', 'EventsManagement@renderList');
    Route::post('event-update', 'EventsManagement@update');
    Route::get('event_status/{id}/{status}', 'EventsManagement@status_change');
    //contact
    Route::resource('contact-mgt', 'ContactInformation');
    Route::get('contact-js', 'ContactInformation@renderList');
    Route::post('contact-update', 'ContactInformation@update');
    Route::get('contact_status/{id}/{status}', 'ContactInformation@status_change');
    //theme
    Route::get('theme-setting', 'Theme@editTheme');
    Route::post('theme-update', 'Theme@updateTheme');
    Route::get('theme-edit-weoffer', 'Theme@editWeOffer');
    Route::post('theme-update-weoffer', 'Theme@updateWeOffer');
    Route::get('add-companies', 'Theme@addCompany');
    Route::post('add-companies', 'Theme@storeCompany');
    Route::get('delete-company/{id}', 'Theme@deleteCompany');
    Route::get('edit-video-content', 'Theme@editVideoSection');
    Route::post('update-video-content', 'Theme@updateVideoSection');
    Route::get('add-certificate', 'Theme@addCertificates');
    Route::post('add-certificate', 'Theme@storeCertificates');
    Route::get('delete-certificate/{id}', 'Theme@deleteCertificates');
    //themecontent
    Route::get('themecontent-mgt', 'ThemeContent@editThemeContent');
    Route::post('themecontent-mgt-update', 'ThemeContent@updateThemeContent');
    //Footer links
    Route::resource('footerlink-mgt', 'FooterLinks');
    Route::get('footerlink-js', 'FooterLinks@renderList');
    Route::get('footerlink-edit-js/{id}', 'FooterLinks@editJs');
    Route::post('footerlink-update', 'FooterLinks@update');
    Route::get('footerlink_status/{id}/{status}', 'FooterLinks@status_change');

    //Review
    Route::resource('review-mgt', 'CustomerReviews');
    Route::get('review-js', 'CustomerReviews@renderList');
    Route::get('review_status/{id}/{status}', 'CustomerReviews@status_change');
   
});


Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth']], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});
