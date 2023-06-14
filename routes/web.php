<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

Route::get('/', 'Authentication@index')->name('login');
Route::post('/', 'Authentication@login');
Route::get('/logout', 'Authentication@logout');

Route::get('clear_cache', function () {

    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('view:clear');
    Artisan::call('config:cache');

    dd("Everything is cleared");

});
