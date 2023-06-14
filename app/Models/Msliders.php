<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Msliders extends Model
{
    protected $table = 'wq_sliders';

    protected $primaryKey = 'slider_id';

    public $timestamps = true;

    protected $guarded = ['slider_id'];

    protected $fillable = ['slider_title', 'slider_image','slider_description','slider_link','slider_order','_status'];
}
