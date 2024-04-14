import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const StartDate = ({ onChange }) => {
    const [startDate, setStartDate] = useState(new Date());

    const handleDateChange = (date) => {
        setStartDate(date);
        onChange(date);
    };


    return (
        <div className='w-full'>
            <label htmlFor="date" className="block text-md font-medium leading-6  text-gray-900">
                Start Date
            </label>
            <DatePicker className='border-none rounded-md' selected={startDate} onChange={handleDateChange} />
        </div>
    )
}

export default StartDate