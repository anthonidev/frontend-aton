import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ViewGridIcon } from '@heroicons/react/outline'
import { FilterIcon } from '@heroicons/react/solid'
import React, { Fragment, FunctionComponent } from 'react'
const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
const ShopHead: FunctionComponent<{
    title:string
    setMobileFiltersOpen: (value: boolean) => void;
}> = ({ title,setMobileFiltersOpen }) => {
    return (
            <div className="relative z-10 flex items-baseline justify-between pt-4 pb-6 border-b border-gray-200">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">{title}</h1>

                <div className="flex items-center">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                Sort
                                <ChevronDownIcon
                                    className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {sortOptions.map((option) => (
                                        <Menu.Item key={option.name}>
                                            {({ active }) => (
                                                <a
                                                    href={option.href}
                                                    className={classNames(
                                                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    {option.name}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                    <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">View grid</span>
                        <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                        onClick={() => setMobileFiltersOpen(true)}
                    >
                        <span className="sr-only">Filters</span>
                        <FilterIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                </div>
            </div>

       
    )
}

export default ShopHead