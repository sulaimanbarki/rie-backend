<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MsubCategories extends Model
{
    protected $table = 'wq_subcategories';

    protected $primaryKey = 'subcategory_id';

    public $timestamps = true;

    protected $guarded = ['category_id', 'subcategory_id'];

    protected $fillable = ['category_id', 'subcategory_name','subcategory_slug','subcategory_order','subcategory_image','_status'];
}
