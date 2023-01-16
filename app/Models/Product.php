<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'price', 'active'];

    public function categories()
    {
        return $this->belongsToMany('App\Models\Category', 'category_product', 'product_id', 'category_id');
    }
}
