<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'parent_id', 'active'];
    protected $attributes = [
        'active' => 1,
    ];

    public function scopeRoot($query)
    {
        $query->where('parent_id', 0);
    }

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function products()
    {
        return $this->belongsToMany('App\Models\Product', 'category_product', 'category_id', 'product_id');
    }
}
