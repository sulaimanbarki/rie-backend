<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class McontactInformation extends Model
{
    protected $table = 'wq_contact_information';

    protected $primaryKey = 'contact_id';

    public $timestamps = true;

    protected $guarded = ['contact_id'];

    protected $fillable = ['contact_title', 'contact_branch','contact_address','contact_phone','contact_mobile','contact_fax','contact_email','_status'];
}
								