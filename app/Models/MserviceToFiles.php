<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MserviceToFiles extends Model
{
    protected $table = 'service_to_files';

    protected $primaryKey = 'servicefile_id';

    public $timestamps = true;

    protected $guarded = ['servicefile_id','service_id'];

    protected $fillable = ['service_id', 'servicefile_name', 'servicefile_link', 'servicefile_status'];
}
