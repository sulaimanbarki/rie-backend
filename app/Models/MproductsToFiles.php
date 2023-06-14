<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MproductsToFiles extends Model
{
    protected $table = 'products_to_files';

    protected $primaryKey = 'productfile_id';

    public $timestamps = true;

    protected $guarded = ['productfile_id','product_id'];

    protected $fillable = ['product_id', 'product_file'];
}
