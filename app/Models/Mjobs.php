<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mjobs extends Model
{
    protected $table = 'wq_jobs';

    protected $primaryKey = 'job_id';

    public $timestamps = true;

    protected $guarded = ['job_id'];

    protected $fillable = ['job_title','job_slug', 'job_lastdate','job_location','job_type','job_features','job_benefits', 'job_experience', 'job_education',
     'job_detail', '_status'];
}
