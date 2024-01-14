"use client"

import { FaBell } from 'react-icons/fa';
import { useRouter } from 'next/navigation'
import { grafikDashProps } from '../../../../../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const grafikDash: grafikDashProps[] = [
    {
        week: "week-1",
        production: "100",
    },
    {
        week: "2",
        production: "200",
    },
    {
        week: "3",
        production: "150",
    },
    {
        week: "4",
        production: "300",
    }
]

const tableData = [
    ['Header 1', 'Header 2', 'Header 3', 'Header 4', 'Header 5', 'Header 6', 'Header 7'],
    ['Row 1 Data 1', 'Row 1 Data 2', 'Row 1 Data 3', 'Row 1 Data 4', 'Row 1 Data 5', 'Row 1 Data 6', 'Row 1 Data 7'],
    ['Row 2 Data 1', 'Row 2 Data 2', 'Row 2 Data 3', 'Row 2 Data 4', 'Row 2 Data 5', 'Row 2 Data 6', 'Row 2 Data 7'],
];

export default function ProductionOverview() {
    const router = useRouter()
    const isGrafikDashEmpty  = !Array.isArray(grafikDash) || grafikDash.length < 1 || !grafikDash

    return(
        <div className="w-full bg-[#F7F7F7] flex flex-col p-[24px] gap-4">
            <div className="h-1/6 bg-white rounded-[16px] text-black flex flex-row px-5 justify-between items-center">
                <div className='p-2 flex flex-col gap-1'>
                    <h1 className="font-extrabold my-auto text-2xl font-openSans">
                        Production Overview
                    </h1>
                    <div className='flex gap-1 text-slate-500 text-sm font-normal font-inter text-start'>
                        <button 
                            onClick={() => router.push("/dashboard")}
                        >
                            Dashboard
                        </button>
                        <p>/</p>
                        <button 
                            onClick={() => router.push("/dashboard/productionOverview")}
                        >
                            Production Overview
                        </button>
                    </div>
                </div>
                <div className="p-[7px] bg-gray-200 cursor-pointer rounded-full">
                    <FaBell className="text-gray-500"></FaBell>
                </div>
            </div>
            <div className='h-3/6 flex flex-row w-full gap-4'>
                <div className="w-2/3 bg-white rounded-[16px] p-5 justify-between items-center overflow-y-scroll">
                    <div className='p-2 flex flex-col gap-4'>
                        <h1 className="text-neutral-700 text-xl font-inter">
                            Produksi per Bulan
                        </h1>
                        {!isGrafikDashEmpty ? (
                                <div className=''>
                                    <LineChart width={650} height={240} data={grafikDash}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="week" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="production" stroke="#8884d8" />
                                    </LineChart>
                                </div>
                            ) : (
                                <div className="flex justify-center items-center">
                                    <p className="text-sm text-gray-400">No Data</p>
                                </div>
                        )}
                    </div>
                </div>
                <div className="w-1/3 flex flex-col gap-4">
                    <div className='h-1/2 bg-white rounded-[16px] p-5 justify-between items-center'>
                        <div className='p-2 flex flex-col gap-6'>
                            <h1 className="text-neutral-700 text-xl font-inter">
                                Match Factor Actual
                            </h1>
                            <h2 className='text-slate-500 text-center text-3xl font-semibold'>0,89</h2>
                        </div>
                    </div>
                    <div className='h-1/2 bg-white rounded-[16px] p-5 justify-between items-center'>
                        <div className='p-2 flex flex-col gap-6'>
                            <h1 className="text-xl font-inter text-neutral-700">
                                Match Factor Target
                            </h1>
                            <h2 className='text-slate-500 text-center text-3xl font-semibold'>0,99</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-2/6 flex flex-row w-full gap-4'>
                <div className="w-3/4 bg-white rounded-[16px] p-5 justify-between items-center overflow-y-scroll">
                    <div className='p-2 flex flex-col gap-4'>
                        <h1 className="text-neutral-700 text-xl font-inter">
                            Problems
                        </h1>
                        <table className='text-slate-800 text-sm table-fixed border-2 border-slate-800'>
                            <thead className='border-2 border-slate-800'>
                                <tr>
                                    {tableData[0].map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className='border-2 '>
                                {tableData.slice(1).map((row, index) => (
                                    <tr key={index} className='border-2 border-slate-800'>
                                        {row.map((data, index) => (
                                            <td key={index}>{data}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-1/4 flex flex-col gap-4 bg-white rounded-[16px] p-5">
                    <div className='p-2 flex flex-col gap-6'>
                        <h1 className="text-neutral-700 text-xl font-inter">
                            Achievement to Goal
                        </h1>
                        <div className='w-fit mx-auto border-2 border-[#0F231F] text-[#0F231F] font-inter p-3 px-10 rounded-[16px] text-lg font-semibold'>
                            100%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}