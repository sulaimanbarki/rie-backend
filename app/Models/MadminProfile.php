<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MadminProfile extends Model
{
    protected $table = 'admin_profile';

    protected $primaryKey = 'adprofile_id';

    public $timestamps = true;

    protected $guarded = ['adprofile_id', 'aduser_id'];

    protected $fillable = ['aduser_id', 'adprofile_city', 'adprofile_country', 'adprofile_avatar',
     'adprofile_bio'];
}
