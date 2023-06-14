<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MreachUs extends Model
{
    protected $table = 'wq_reachus';

    protected $primaryKey = 'reachus_id';

    public $timestamps = true;

    protected $guarded = ['reachus_id'];

    protected $fillable = ['reachus_name', 'reachus_email','reachus_message'];
}
