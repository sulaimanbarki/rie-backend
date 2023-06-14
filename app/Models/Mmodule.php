<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mmodule extends Model
{
    protected $table = 'wq_module';

    protected $primaryKey = 'module_id';

    public $timestamps = true;

    protected $guarded = ['module_id'];

    protected $fillable = ['module_title', 'module_slug', '_order'];
}
