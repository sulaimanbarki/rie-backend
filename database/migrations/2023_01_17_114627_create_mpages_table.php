<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wq_pages', function (Blueprint $table) {
            $table->bigIncrements('page_id');
            $table->integer('menu_id');
            $table->string('page_title');
            $table->string('page_slug');
            $table->string('page_cover');
            $table->text('page_summary');
            $table->text('page_details'); 
            $table->string('page_buttonlabel');
            $table->string('page_url');
            $table->integer('page_status')->default(1);
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mpages');
    }
};
