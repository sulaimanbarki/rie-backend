<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mevents extends Model
{
    protected $table = 'wq_events';

    protected $primaryKey = 'event_id';

    public $timestamps = true;

    protected $guarded = ['event_id'];

    protected $fillable = ['event_title', 'event_slug','event_cover','event_excerpt','event_description','event_date','event_time','_status'];
}
