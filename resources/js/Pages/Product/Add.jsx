import {Fragment, useEffect, useState} from 'react'
import Guest from "@/Layouts/GuestLayout";
import {Link, useForm} from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import List from "@/Components/List";
import PrimaryButton from "@/Components/PrimaryButton";
import {Inertia} from "@inertiajs/inertia";
import {Transition} from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Add() {
    const {data, setData, post, reset, processing, errors, setError, clearErrors} = useForm({
        name: '',
        price: '',
        category: [],
    })

    const [recentlySuccessful, setRecentlySuccessful] = useState(false);
    const [categories, setCategories] = useState([]);
    const fetchCategories = () => {
        return axios.get('http://127.0.0.1:8000/api/categories')
            .then((response) => setCategories(response.data.data));
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    const callback = (category) => {
        const oldCategory = [...data.category];
        let index = oldCategory.indexOf(category);

        if (index === -1) {
            setData('category', [...data.category, category])
        } else {
            oldCategory.splice(index, 1);
            setData('category', oldCategory)
        }

    }

    function submit(e) {
        clearErrors()
        e.preventDefault()

        axios.post('http://127.0.0.1:8000/api/products', {
            name: data.name,
            price: data.price,
            category: data.category,
        })
            .then((response) => {
                setRecentlySuccessful(true);
            })
            .catch((error) => {
                if (error.response) {
                    setError('name', error.response.data.errors.name ?? '')
                    setError('price', error.response.data.errors.price ?? '')
                    setError('category', error.response.data.errors.category ?? '')
                }

            });
    }


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
                                        Create a new product.
                                    </p>
                                </div>

                            </div>
                            <main className="mx-auto py-6 px-6 max-w-7xl lg:px-8">
                                <form onSubmit={submit}>
                                    <div className="sm:grid grid-cols-2	gap-3">
                                        <div className="mt-4">
                                            <InputLabel forInput="name" value="Name"/>
                                            <TextInput id="name"
                                                       name="name"
                                                       className="mt-1 block w-full"
                                                       autoComplete="name"
                                                       handleChange={e => setData('name', e.target.value)}/>
                                            <InputError message={errors.name} className="mt-2"/>
                                        </div>

                                        <div className="mt-4">
                                            <InputLabel forInput="price" value="Price"/>
                                            <TextInput id="price"
                                                       name="price"
                                                       className="mt-1 block w-full"
                                                       autoComplete="price"
                                                       handleChange={e => setData('price', e.target.value)}/>
                                            <InputError message={errors.price} className="mt-2"/>
                                        </div>
                                    </div>
                                    <div className={'mt-6 max-w-lg mx-auto'}>
                                        {categories && <List list={categories} callback={callback} selected={data.category}/>}
                                        <InputError message={errors.category} className="mt-2"/>
                                    </div>
                                    <PrimaryButton className="ml-4 mb-2" processing={processing}>
                                        Add
                                    </PrimaryButton>
                                    <Transition
                                        show={recentlySuccessful}
                                        enterFrom="opacity-0"
                                        leaveTo="opacity-0"
                                        className="transition ease-in-out"
                                    >
                                        <p className="text-sm text-gray-600 ml-4">Saved.</p>
                                    </Transition>
                                </form>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}
