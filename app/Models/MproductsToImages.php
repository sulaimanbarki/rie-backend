<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MproductsToImages extends Model
{
    protected $table = 'products_to_images';

    protected $primaryKey = 'productimages_id';

    public $timestamps = true;

    protected $guarded = ['product_id','productimages_id'];

    protected $fillable = ['product_id', 'product_image'];
}
