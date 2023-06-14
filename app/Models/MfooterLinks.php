<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MfooterLinks extends Model
{
    protected $table = 'wq_footerlinks';

    protected $primaryKey = 'footer_linkid';

    public $timestamps = true;

    protected $guarded = ['footer_linkid'];

    protected $fillable = ['footer_linkname','footer_linknameslug', 'footer_link','footer_linktype','_status'];
}
