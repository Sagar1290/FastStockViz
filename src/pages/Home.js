import React, { useState } from 'react'
import Dropdown from '../component/Dropdown'
import InputTime from '../component/InputTime'
import StartDate from '../component/StartDate'
import EndDate from '../component/EndDate'


const Home = () => {
    const [stockData, setStockData] = useState([])
    const [stockInput, setStockInput] = useState({
        name: "",
        start_date: "",
        end_date: "",
        period: "3mo"
    })

    const updateStockInput = (field, value) => {
        setStockInput(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(stockInput)
        if (!stockInput.name || !stockInput.start_date || !stockInput.end_date) {
            alert("all fields are required!")
            return
        }

        try {
            const res = await fetch('http://localhost:8000/api/stock_coordinates', {
                method: 'POST',
                body: JSON.stringify(stockInput),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            setStockData(data.data)

        } catch (error) {
            console.log("error: ", error)
        }
    }
    console.log(stockData)
    return (
        <section className='mt-20'>
            <div className='flex flex-col justify-around items-center gap-10 max-w-lg mx-auto bg-sky-100 rounded-lg shadow ' >
                <div className='w-full px-8 pt-8'>
                    <Dropdown onChange={value => updateStockInput("name", value)} />
                </div>
                <div className='flex flex-row gap-4'>
                    <StartDate onChange={value => updateStockInput("start_date", formatDate(value))} />
                    <EndDate onChange={value => updateStockInput("end_date", formatDate(value))} />
                </div>
                <div className='flex justify-end w-full pr-8 mb-4'>
                    <button type="submit" onClick={handleSubmit} class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Display</button>
                </div>
            </div>
            <h1 className='text-4xl text-gray-600 font-bold text-center py-10'>REAL TIME FETCHED DATA</h1>
            <div class="overflow-x-auto w-[90%] mx-auto border rounded-xl">
                <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead class="ltr:text-left rtl:text-right">
                        <tr>
                            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
                            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Open</th>
                            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Close</th>
                            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">High</th>
                            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Low</th>
                            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Volume</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                        {stockData?.map((ele, id) => {
                            return (
                                <tr class="odd:bg-gray-50">
                                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{ele.Date}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{ele.Open}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{ele.Close}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{ele.High}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{ele.Low}</td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">{ele.Volume}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Home