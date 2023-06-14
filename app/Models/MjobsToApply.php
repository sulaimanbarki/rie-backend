<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MjobsToApply extends Model
{
    protected $table = 'jobs_to_apply';

    protected $primaryKey = 'jobapply_id';

    public $timestamps = true;

    protected $guarded = ['jobapply_id','job_id'];

    protected $fillable = ['job_id', 'user_fullname','user_email','user_mobile','user_coverletter','user_cv', '_status'];
}
