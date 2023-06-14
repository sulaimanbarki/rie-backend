<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MmoduleToLinks extends Model
{
    protected $table = 'module_to_links';

    protected $primaryKey = 'modulelink_id';

    public $timestamps = true;

    protected $guarded = ['module_id', 'modulelink_id'];

    protected $fillable = ['link_title', 'link_val', 'module_id', '_visiblity'];
}
