import React from 'react'

const InputTime = ({ input, fun }) => {
    return (
        <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                Select Period
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="number"
                    name="period"
                    id="period"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="3"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="period" className="sr-only">
                        period
                    </label>
                    <select
                        id="currency"
                        name="currency"
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                        <option value="mo">months</option>
                        <option value="d">days</option>
                        <option value="y">years</option>
                    </select>
                </div>
            </div>
        </div>

    )
}

export default InputTime