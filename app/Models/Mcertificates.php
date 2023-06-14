<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mcertificates extends Model
{
    protected $table = 'wq_certificates';

    protected $primaryKey = 'certificate_id';

    public $timestamps = true;

    protected $guarded = ['certificate_id'];

    protected $fillable = ['certificate_name', 'certificate_file','_status'];
}
