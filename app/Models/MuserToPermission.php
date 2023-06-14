<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MuserToPermission extends Model
{
    protected $table = 'aduser_to_permission';

    protected $primaryKey = 'userper_id';

    public $timestamps = true;

    protected $guarded = [ 'userper_id', 'aduser_id', 'permission_id' ];

    protected $fillable = ['aduser_id', 'permission_id'];
}
