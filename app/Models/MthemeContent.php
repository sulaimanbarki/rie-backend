<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MthemeContent extends Model
{
    protected $table = 'wq_themecontent';

    protected $primaryKey = 'themecontent_id';

    public $timestamps = true;

    protected $guarded = ['themecontent_id'];

    protected $fillable = ['themecontent_vision','themecontent_mission','themecontent_achivement','themecontent_products',
                            'themecontent_services','themecontent_career','themecontent_contact','themecontent_about',
                            'themecontent_about_image','themecontent_groupof_companies'];
}
						