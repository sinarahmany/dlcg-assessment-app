import {Fragment, useEffect, useState} from 'react'
import Guest from "@/Layouts/GuestLayout";
import Table from "@/Components/Table";
import NestedList from "@/Components/NestedList";
import Sidebar from "@/Components/Sidebar";
import ProductGrid from "@/Components/ProductGrid";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Products() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState();

    const fetchCategories = () => {
        return axios.get('http://127.0.0.1:8000/api/categories')
            .then((response) => setCategories(response.data.data));
    }

    const fetchProducts = (id = null) => {
        return axios.get('http://127.0.0.1:8000/api/products/' + (id != null ? `?category=${id}` : ''))
            .then((response) => setProducts(response.data.data));
    }

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, [])

    useEffect(() => {
        fetchProducts(activeCategory);
    }, [activeCategory])


    return (
        <Guest>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-2">
                        <div className="p-4 sm:p-6 lg:p-8">
                            <div className="sm:flex sm:items-center">
                                <div className="sm:flex-auto">
                                    <h1 className="text-xl font-semibold text-gray-900">Products</h1>
                                    <p className="mt-2 text-sm text-gray-700">
                                        A nested list of all the products.
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
                            <main className="mx-auto py-6 px-6 max-w-7xl lg:px-8">
                                <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                                    {
                                        categories && <Sidebar categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
                                    }

                                    {/* Product grid */}
                                    <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
                                        {
                                            products && <ProductGrid products={[products].flat()}/>
                                        }
                                    </div>
                                </div>
                            </main>

                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}
