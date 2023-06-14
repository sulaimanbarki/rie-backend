<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MroleToLinks extends Model
{
    protected $table = 'adrole_to_links';

    protected $primaryKey = 'rolelink_id';

    public $timestamps = true;

    protected $guarded = ['rolelink_id', 'modulelink_id', 'adrole_id'];

    protected $fillable = ['modulelink_id', 'adrole_id'];
}
