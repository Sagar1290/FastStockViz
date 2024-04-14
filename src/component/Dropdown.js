import React, { useState } from 'react';

const Dropdown = ({ onChange }) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('Select Company');

    const handleMenu = () => {
        setShow(prev => !prev);
    };

    const handleUpdate = (value) => {
        setName(value);
        onChange(name);
        setShow(false)
    };

    return (
        <div className="w-full relative px-2">
            <div className="inline-flex items-center overflow-hidden rounded-md border bg-white w-full py-2">
                <h2 className="w-[90%] border-e px-4 py-2 text-md text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                    {name}
                </h2>

                <button className="w-[10%] h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700" onClick={handleMenu}>
                    <span className="sr-only">Menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            {show &&
                <div className="absolute right-4 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg" role="menu">
                    <div className="p-2">
                        <p
                            href="#"
                            className="cursor-pointer block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                            onClick={() => handleUpdate("MSFT")}
                        >
                            Microsoft MSFT
                        </p>

                        <p
                            href="#"
                            className="cursor-pointer block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                            onClick={() => handleUpdate("AAPL")}
                        >
                            Apple AAPL
                        </p>

                        <p
                            href="#"
                            className="cursor-pointer block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                            onClick={() => handleUpdate("GOOG")}
                        >
                            Google GOOG
                        </p>

                    </div>
                </div>
            }
        </div>
    );
};

export default Dropdown;
