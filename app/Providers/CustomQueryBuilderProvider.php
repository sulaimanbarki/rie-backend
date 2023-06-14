<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Query\Builder;

class CustomQueryBuilderProvider extends ServiceProvider
{

    public function register()
    {
        //
    }

    public function boot()
    {
        Builder::macro('if', function ($condition, $column, $operator, $value) {
            if ($condition) {
                return $this->where($column, $operator, $value);
            }

            return $this;
        });

        Builder::macro('orIf', function ($condition, $column, $operator, $value) {
            if ($condition) {
                return $this->orWhere($column, $operator, $value);
            }

            return $this;
        });
        Builder::macro('ifBetween', function ($condition, $column, $array) {
            if ($condition) {
                return $this->whereBetween($column, $array);
            }

            return $this;
        });
    }
}
