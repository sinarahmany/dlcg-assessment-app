import {Fragment, useEffect, useState} from 'react'
import Guest from "@/Layouts/GuestLayout";
import Table from "@/Components/Table";
import NestedList from "@/Components/NestedList";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Categories() {
    const [categories, setCategories] = useState([]);

    const fetchData = () => {
        return axios.get('http://127.0.0.1:8000/api/categories?nested=true')
            .then((response) => setCategories(response.data.data));
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <Guest>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-2">
                        <div className="p-4 sm:p-6 lg:p-8">
                            <div className="sm:flex sm:items-center">
                                <div className="sm:flex-auto">
                                    <h1 className="text-xl font-semibold text-gray-900">Categories</h1>
                                    <p className="mt-2 text-sm text-gray-700">
                                        A nested list of all the categories and their products.
                                    </p>
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                    >
                                        Add product
                                    </button>
                                </div>
                            </div>
                            {
                                categories &&  <NestedList data={categories} />
                            }

                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}
