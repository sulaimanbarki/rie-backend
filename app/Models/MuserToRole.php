<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MuserToRole extends Model
{
    protected $table = 'aduser_to_role';

    protected $primaryKey = 'aduserrole_id';

    public $timestamps = true;

    protected $guarded = [ 'aduserrole_id', 'aduser_id', 'adrole_id' ];

    protected $fillable = ['aduser_id', 'adrole_id'];
}
