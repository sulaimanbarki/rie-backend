<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mtheme extends Model
{
    protected $table = 'wq_theme';

    protected $primaryKey = 'theme_id';

    public $timestamps = true;

    protected $guarded = ['theme_id'];

    protected $fillable = ['theme_title', 'theme_logo','theme_weoffer_title','theme_weoffer_content',
    'theme_instagram','theme_facebook','theme_twitter','theme_linkdin','theme_weoffer_image','theme_weoffer_link','theme_about',
    'theme_copyright','theme_phone','theme_address','theme_email'];
}
						