<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mroles extends Model
{
    protected $table = 'admin_roles';

    protected $primaryKey = 'adrole_id';

    public $timestamps = true;

    protected $guarded = ['role_id'];

    protected $fillable = ['adrole_code', 'adrole_uuid', 'adrole_title', 'adrole_slug', 'adrole_description'];
}
