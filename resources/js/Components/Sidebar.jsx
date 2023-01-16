function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar({categories, activeCategory, setActiveCategory}) {
    return (
        <aside>
            <h2 className="sr-only">Filters</h2>
            <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                    <div className={'pt-10'}>
                        <fieldset>
                            <legend className="block text-sm font-medium text-gray-900">Category</legend>
                            <div className="space-y-3 pt-6">
                                {categories.map((option, optionIdx) => (
                                    <div key={option.id} className="flex items-center">
                                        <input
                                            id={`${option.id}-${optionIdx}`}
                                            name={`${option.id}[]`}
                                            checked={activeCategory === option.id}
                                            onChange={() => setActiveCategory(option.id)}
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor={`${option.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                            {option.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>
        </aside>

    )
}
