import {useEffect, useState} from "react";

export default function List({list, callback, selected}) {

    const handleOnChange = (position, value) => {
        callback(position);
    };


    return (
        <fieldset>
            <legend className="text-lg font-medium text-gray-900">Category</legend>
            <div className="mt-4 border-t border-b border-gray-200 grid grid-cols-2 gap-x-8">
                {list.map((item, id) => (
                    <div key={id} className="relative flex items-start py-2">
                        <div className="min-w-0 flex-1 text-sm">
                            <label htmlFor={`person-${item.id}`} className="select-none font-medium text-gray-700">
                                {item.name}
                            </label>
                        </div>
                        <div className="ml-3 flex h-5 items-center">
                            <input
                                id={`person-${item.id}`}
                                name={`person-${item.id}`}
                                type="checkbox"
                                checked={selected.includes(item.id)}
                                onChange={(e) => {handleOnChange(item.id);}}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </fieldset>
    )
}
