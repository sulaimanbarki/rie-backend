<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mproducts extends Model
{
    protected $table = 'wq_products';

    protected $primaryKey = 'product_id';

    public $timestamps = true;

    protected $guarded = ['product_id','category_id'];

    protected $fillable = ['category_id', 'subcategory_id','product_name','product_slug','product_color','product_model','product_fueltype','product_details','product_info','_status'];
}
