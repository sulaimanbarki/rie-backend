<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Minbox extends Model
{
    protected $table = 'wq_inbox';

    protected $primaryKey = 'inbox_id';

    public $timestamps = true;

    protected $guarded = ['inbox_id'];

    protected $fillable = ['inbox_name', 'inbox_email','inbox_mobile','inbox_subject','inbox_details'];
}
				