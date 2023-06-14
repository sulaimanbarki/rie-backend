<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MroleToModule extends Model
{
    protected $table = 'adrole_to_module';

    protected $primaryKey = 'rolemodule_id';

    public $timestamps = true;

    protected $guarded = ['rolemodule_id', 'module_id', 'adrole_id'];

    protected $fillable = ['module_id', 'adrole_id'];
}
