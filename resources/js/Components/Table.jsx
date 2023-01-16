import {Fragment} from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Table({rows}) {
    return (
        <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full">
                            <thead className="bg-white">
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                    Name
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Price
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Status
                                </th>

                            </tr>
                            </thead>
                            <tbody className="bg-white">
                            {rows.map((row, id) => (
                                <Fragment key={row.name}>
                                    <tr className="border-t border-gray-200">
                                        <th
                                            colSpan={5}
                                            scope="colgroup"
                                            className="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 sm:px-6"
                                        >
                                            {row.name}
                                        </th>
                                    </tr>


                                        <tr
                                            key={row.id}
                                            className={classNames(id === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                                        >
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {row.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{row.price }</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{row.active === 1 ? 'Active' : 'Disabled'}</td>

                                        </tr>

                                    {/*{row.people.map((person, personIdx) => (*/}
                                    {/*    <tr*/}
                                    {/*        key={person.email}*/}
                                    {/*        className={classNames(personIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}*/}
                                    {/*    >*/}
                                    {/*        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">*/}
                                    {/*            {person.name}*/}
                                    {/*        </td>*/}
                                    {/*        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>*/}
                                    {/*        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>*/}
                                    {/*        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>*/}
                                    {/*        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">*/}
                                    {/*            <a href="#" className="text-indigo-600 hover:text-indigo-900">*/}
                                    {/*                Edit<span className="sr-only">, {person.name}</span>*/}
                                    {/*            </a>*/}
                                    {/*        </td>*/}
                                    {/*    </tr>*/}
                                    {/*))}*/}
                                </Fragment>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
