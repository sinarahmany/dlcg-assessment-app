export default function ProductGrid({products}) {
    return (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {products.map((product) => (
                <li
                    key={product.id}
                    className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-gray-50 text-center shadow"
                >
                    <div className="flex flex-1 flex-col p-8">
                        <h3 className="mt-6 text-sm font-medium text-gray-900">{product.name}</h3>
                        <dl className="mt-1 flex flex-grow flex-col justify-between">
                            <dt className="sr-only">Title</dt>
                            <dd className="text-sm text-gray-500">{product.price}</dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="mt-3">
                <span className={"rounded-full px-2 py-1 text-xs font-medium " + (product.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800')}>
                  {product.active ? 'active' : 'Inactive'}
                </span>
                            </dd>
                        </dl>
                    </div>
                </li>
            ))}
            {
                products.length == 0 && 'No results found'
            }
        </ul>
    )
}
