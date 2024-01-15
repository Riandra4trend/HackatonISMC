"use client";

import { FaBell } from 'react-icons/fa';
import DashCard from '@/components/DashCard';
import { useRouter } from 'next/navigation'
import { fleetProps, grafikDashProps } from '../../../../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const fleetCard: fleetProps[] = [
    {
        id: "1",
        push: "2",
        pop: "1",
    },
    {
        id: "2",
        push: "0",
        pop: "0",
    },
    {
        id: "3",
        push: "3",
        pop: "1",
    },
    {
        id: "4",
        push: "1",
        pop: "2",
    },
    {
        id: "5",
        push: "1",
        pop: "0",
    },
    {
        id: "6",
        push: "0",
        pop: "2",
    }
]

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

function calculateLinearProgramming() {
    
}

export default function Dashboard() {
    const router = useRouter()
    const isFleetEmpty  = !Array.isArray(fleetCard) || fleetCard.length < 1 || !fleetCard
    const isGrafikDashEmpty  = !Array.isArray(grafikDash) || grafikDash.length < 1 || !grafikDash
    
    return (
        <div className="w-full bg-[#F7F7F7] flex flex-col p-[24px] gap-4">
            <div className="w-full h-1/6 bg-white rounded-[16px] text-black flex flex-row px-5 justify-between items-center">
                <div className='p-2 flex flex-col gap-1'>
                    <h1 className="font-extrabold my-auto text-2xl font-openSans">
                        Dashboard
                    </h1>
                    <button 
                        className="text-slate-500 text-sm font-normal font-inter text-start"
                        onClick={() => router.push("/dashboard")}
                    >
                        Dashboard
                    </button>
                </div>
                <div className="p-[7px] bg-gray-200 cursor-pointer rounded-full">
                    <FaBell className="text-gray-500"></FaBell>
                </div>
            </div>
            <div className='h-5/6 flex flex-row w-full gap-4'>
                <div className="w-2/3 bg-white rounded-[16px] p-5 justify-between items-center overflow-y-scroll">
                    <div className='p-2 flex flex-col gap-4'>
                        <h1 className="text-neutral-700 text-xl font-inter">
                            Fleets
                        </h1>
                        <div>
                            {!isFleetEmpty ? (
                                <div className='flex flex-wrap justify-between gap-10'>
                                    {fleetCard.map((item) => (
                                        <div key={item.id}>
                                            <DashCard data={item} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex justify-center items-center">
                                    <p className="text-sm text-gray-400">No Data</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col gap-4">
                    <div className='h-1/3 bg-white rounded-[16px] p-5 justify-between items-center'>
                        <div className='p-2 flex flex-col gap-6'>
                            <h1 className="text-neutral-700 text-xl font-inter">
                                Achievement to Goal
                            </h1>
                            <div className='w-fit mx-auto border-2 border-[#0F231F] text-[#0F231F] font-inter p-3 px-10 rounded-[16px] text-lg font-semibold'>
                                100%
                            </div>
                        </div>
                    </div>
                    <div className='h-2/3 bg-white rounded-[16px] justify-between items-center'>
                        <div className='p-2 flex flex-col gap-2 leading-loose'>
                            <h1 className="p-5 text-xl font-inter text-neutral-700">
                                Production per Month (All)
                            </h1>
                            {!isGrafikDashEmpty ? (
                                <div>
                                    <LineChart width={340} height={270} data={grafikDash}>
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
                </div>
            </div>
        </div>
    )
}