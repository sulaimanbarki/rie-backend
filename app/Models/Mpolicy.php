<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mpolicy extends Model
{
    protected $table = 'wq_policies';

    protected $primaryKey = 'policy_id';

    public $timestamps = true;

    protected $guarded = ['policy_id'];

    protected $fillable = ['policy_title', 'policy_slug', 'policy_body'];
}
