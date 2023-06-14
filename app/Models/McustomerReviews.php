<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class McustomerReviews extends Model
{
    protected $table = 'wq_customerreviews';

    protected $primaryKey = 'review_id';

    public $timestamps = true;

    protected $guarded = ['review_id'];
    //data
    protected $fillable = ['review_name', 'review_designation', 'review_image', 'review_content', '_status'];
}
