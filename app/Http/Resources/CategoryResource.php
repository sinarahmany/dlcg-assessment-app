<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        if ($request->nested == 'true')
        {
            return [
                'id' => $this->id,
                'name' => $this->name,
                'active' => $this->active,
                'children' => $this->when(count($this->children), CategoryResource::collection($this->children)),
                'products' => $this->when(count($this->products), ProductResource::collection($this->products)),
            ];
        } else{
            return [
                'id' => $this->id,
                'name' => $this->name,
                'active' => $this->active,
            ];
        }

    }
}
