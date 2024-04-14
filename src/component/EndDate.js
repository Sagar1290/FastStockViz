import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const EndDate = ({ onChange }) => {
    const [endDate, setEndDate] = useState(new Date());

    const handleDateChange = (date) => {
        setEndDate(date);
        onChange(date);
    };

    return (
        <div>
            <label htmlFor="date" className="block text-md font-medium leading-6 text-gray-900">
                End Date
            </label>
            <DatePicker className='border-none rounded-md' selected={endDate} onChange={handleDateChange} />
        </div>
    )
}

export default EndDate