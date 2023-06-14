<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mmenu extends Model
{
    protected $table = 'wq_menus';

    protected $primaryKey = 'menu_id';

    public $timestamps = true;

    protected $guarded = ['menu_id'];

    protected $fillable = [
        'menu_code', 
        'menu_title',
        'menu_slug',
        'menu_order',
        'menu_status'
    ];
}
