<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth'], function () {
    // Permissions
        Route::get('/check-permissions', 'Permissions@inlist_permissions');
    //DROPDOWNS
        Route::get('roles-dropdown-list', 'Common@rolesDropDown');
        Route::get('menus-dropdown-list', 'Common@menusDropDown');
        Route::get('permission-dropdown-list', 'Common@permissionDropDown');
        Route::get('modules-dropdown', 'Common@moduleDropdown');
        Route::get('field-dropdown', 'Common@fieldDropdown');
        Route::get('categories-dropdown', 'Common@categoriesDropdown');
        Route::post('load-category-wise-subcategory', 'Common@loadCategoryWiseSubcategories');
    ///////
    //event wise listing
        Route::post('module-link-via-module', 'Common@module_links_via_module');
});