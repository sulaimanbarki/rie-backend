<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mcompanies extends Model
{
    protected $table = 'wq_companies';

    protected $primaryKey = 'company_id';

    public $timestamps = true;

    protected $guarded = ['company_id'];

    protected $fillable = ['company_name', 'company_link','company_logo','_status'];
}
			