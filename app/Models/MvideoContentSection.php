<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MvideoContentSection extends Model
{
    protected $table = 'wq_theme_videosection';

    protected $primaryKey = 'videosection_id';

    public $timestamps = true;

    protected $guarded = ['videosection_id'];

    protected $fillable = ['first_title', 'second_title','videosection_content','video_cover','video_url','firstsection_title', 
    'firstsection_details','secondsection_title','secondsection_details','thirdsection_title','thirdsection_details'];
}
						