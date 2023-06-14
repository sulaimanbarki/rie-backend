<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mservices extends Model
{
    protected $table = 'wq_services';

    protected $primaryKey = 'service_id';

    public $timestamps = true;

    protected $guarded = ['service_id'];

    protected $fillable = ['service_name', 'service_slug','service_icon','service_excerpt','service_details','service_cover','_status'];
}
