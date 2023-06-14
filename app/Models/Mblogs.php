<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mblogs extends Model
{
    protected $table = 'wq_blogs';

    protected $primaryKey = 'blog_id';

    public $timestamps = true;

    protected $guarded = ['blog_id'];
    //data
    protected $fillable = ['blog_code', 'blog_title', 'blog_excerpt', 'blog_details', 'blog_image', 'blog_slug'];
}
