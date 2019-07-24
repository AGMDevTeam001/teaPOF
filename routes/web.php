<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// homepage/dashboard
Route::get('/', function () {
    return view('index/index');
});

// event approval
Route::get('/dev_tea_pof_v3/index/appEvent', function(){
	return view('index/eventapproved');
});

// event
Route::get('/dev_tea_pof_v3/index/event', function(){
	return view('index/event');
});

// Package
Route::get('/dev_tea_pof_v3/index/package', function(){
return view('index/package');
});

// login
Route::get('/dev_tea_pof_v3', function(){
	return view('home/index');
});

// login AUTH
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
