<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mpermission extends Model
{
    protected $table = 'admin_permission';

    protected $primaryKey = 'permission_id';

    public $timestamps = true;

    protected $guarded = ['permission_id'];

    protected $fillable = ['permission_title', 'permission_value', 'module_id'];
}
