<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mpage extends Model
{
    protected $table = 'wq_pages';

    protected $primaryKey = 'page_id';

    public $timestamps = true;

    protected $guarded = ['page_id','menu_id'];

    protected $fillable = [
        'menu_id',
        'page_title',
        'page_slug',
        'page_cover',
        'page_summary',
        'page_details',
        'page_buttonlabel',
        'page_url',
        'page_status',
    ];
}
