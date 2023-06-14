<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mcategories extends Model
{
    protected $table = 'wq_categories';

    protected $primaryKey = 'category_id';

    public $timestamps = true;

    protected $guarded = ['category_id'];

    protected $fillable = ['category_name', 'category_slug','category_order','category_image','_status'];
}
