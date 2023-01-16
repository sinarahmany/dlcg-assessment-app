import {Fragment} from "react";
import {Disclosure, Transition} from '@headlessui/react';
import {ChevronUpIcon} from '@heroicons/react/20/solid';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NestedList({data, type = 'category'}) {
    return (
        <ul className={(type === 'category' ? 'list-disc' : 'list-decimal') + ' pl-4'}>
            {data.map((row, index) => (
                <Disclosure as="div" defaultOpen={true} className={"bg-gray-50 rounded-md my-2"} key={index}>

                    {({open}) => (
                        <>
                            <Disclosure.Button
                                className={"flex w-full justify-between rounded-lg px-6 py-2 text-left text-sm "
                                    + ((row.children || row.products) ? "hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 " : '')
                                    +(row.price ? "text-white bg-gray-800 font-bold " : "text-gray-900 bg-gray-200 font-medium ") }>
                                <li>{row.name}{row.price && `: $${row.price}`}</li>
                                {(row.children || row.products) && <ChevronUpIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-gray-700`}
                                />}
                            </Disclosure.Button>

                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel static className={"px-4 text-sm text-gray-500 " + (row.products && 'pb-2')}>
                                    {row.products && <NestedList data={row.products} type={'product'} />}
                                    {row.children && <NestedList data={row.children}/>}
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            ))}
        </ul>
    );
}
