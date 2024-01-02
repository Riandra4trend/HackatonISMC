"use client";
import React from 'react';
import { FaBell } from 'react-icons/fa';
import { BsMinecartLoaded } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const grafik = [
    {
        bulan : "Jan",
        emisi : "100",
    },
    {
        bulan : "Feb",
        emisi : "300",
    },
    {
        bulan : "Maret",
        emisi : "200",
    },
    {
        bulan : "April",
        emisi : "400",
    },
    {
        bulan : "May",
        emisi : "600",
    },
    {
        bulan : "June",
        emisi : "400",
    },
    {
        bulan : "July",
        emisi : "700",
    },
    {
        bulan : "August",
        emisi : "300"
    },{
        bulan : "Sept",
        emisi : "100",
    },
    {
        bulan : "Oct",
        emisi : "300",
    },
    {
        bulan : "Nov",
        emisi : "200",
    },
    {
        bulan : "Dec",
        emisi : "300",
    },
]
const reportAnalysis = () => {
    return (
        <div className="w-full bg-[#F7F7F7] flex flex-col p-[24px] gap-4">
            <div className="w-full h-20 bg-white rounded-[16px] text-black flex flex-row px-5 justify-between items-center">
                <div>
                <h1 className="font-bold my-auto text-2xl p-2">
                    Report Analysis
                </h1>
                <p className="text-slate-500 text-xs font-normal font-['Inter'] px-2">Report Overview</p>
                </div>
                <div className="p-[7px] bg-gray-200 cursor-pointer rounded-full">
                <FaBell className="text-gray-500"></FaBell>
                </div>
            </div>
            <div className="flex flex-row w-full gap-4">
                <div className="w-1/3 flex flex-col gap-4">
                    <div className="h-[177px] bg-white rounded-[16px]">
                        <div className="px-8 py-2">
                            <h1 className="w-[222px] text-neutral-700 text-2xl font-semibold font-['Open Sans'] leading-loose">Profit</h1>
                            <div className="flex flex-row gap-7">
                                <FaDollarSign className="text-black text-5xl"></FaDollarSign>
                                <div className="flex flex-col gap-[5px]">
                                    <h1 className="text-black text-4xl font-bold">Rp 2.000.000</h1>
                                    <p className="text-slate-500 text-sm font-bold font-['Inter']">Last Month</p>
                                    <p className="text-lime-500 text-[10px] font-medium font-['Inter']">+10% from months ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[177px] bg-white rounded-[16px]">
                        <div className="px-8 py-2">
                            <h1 className="w-[222px] text-neutral-700 text-2xl font-semibold font-['Open Sans'] leading-loose">Fleets</h1>
                            <div className="flex flex-row gap-10">
                                <BsMinecartLoaded className="text-black text-5xl"></BsMinecartLoaded>
                                <div className="flex flex-col gap-[5px]">
                                    <h1 className="text-black text-4xl font-bold">025</h1>
                                    <p className="text-slate-500 text-sm font-bold font-['Inter']">Total Fleets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* kotak grafik */}
                <div className="w-full h-[370px] bg-white rounded-[16px] py-7 pl-7 flex flex-col overflow-y-scroll" id="style-2">
                    <h1 className="w-[463px] text-neutral-700 text-2xl font-semibold font-['Open Sans'] leading-loose">Carbon Emission Per Month Graph All</h1>
                    {/* taruh grafik disini */}

                    <LineChart width={1100} height={250} data={grafik}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bulan" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="emisi" stroke="#8884d8" />
                    </LineChart>
                    <div className="flex items-baseline"> {/* Use flex and items-baseline */}
                        <p className="w-[162px] h-8 text-neutral-700 text-lg font-bold font-['Inter'] leading-7 inline-block">Recommendation :</p>
                        <span className="w-[487px] text-neutral-700 text-sm font-medium font-['Inter'] leading-7 inline-block">
                            ini hasil rekomendasi, rumusnya bisa kategorisasiin jadi beberapa bagian
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[472px] bg-white rounded-[16px]">
                <div className='px-8 pt-7'>
                    <h1 className="text-neutral-700 text-2xl font-semibold font-['Open Sans'] leading-loose">Productivity Recommendation</h1>
                    <div className='flex flex-row gap-4 justify-between'>
                        <div className='py-4 px-6 w-1/3 bg-white shadow-xl rounded-[20px]'>
                            <div className="text-neutral-700 text-base font-bold font-['Inter']">Problems</div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4">Total <span>20</span></div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4">Average per fleet <span>8</span></div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4">Highest problems from fleet <span>4</span></div>
                            <div className="w-[253px] text-neutral-700 text-base font-medium font-['Inter'] mt-8">Kesimpulan dari Problems</div>
                        </div>
                        <div className='py-4 px-6 w-1/3 bg-white shadow-xl rounded-[20px]'>
                            <div className="text-neutral-700 text-base font-bold font-['Inter']">Problems</div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4">Total <span>20</span></div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4">Average per fleet <span>8</span></div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4">Highest problems from fleet <span>4</span></div>
                            <div className="w-[253px] text-neutral-700 text-base font-medium font-['Inter'] mt-8">Kesimpulan dari Problems</div>
                        </div>
                        <div className='py-4 px-6 w-1/3 bg-white shadow-xl rounded-[20px]'>
                            <div className="text-neutral-700 text-base font-bold font-['Inter']">Problems</div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4">Total <span>20</span></div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4">Average per fleet <span>8</span></div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4">Highest problems from fleet <span>4</span></div>
                            <div className="w-[253px] text-neutral-700 text-base font-medium font-['Inter'] mt-8">Kesimpulan dari Problems</div>
                        </div> 
                    </div>
                    <div className='h-[98px] w-full mt-4 px-5 py-5 rounded-[20px] flex flex-col gap-3 bg-white shadow-xl'>
                        <p className="w-[697px] text-neutral-700 text-base font-bold font-['Inter']">Recommendation</p>
                        <div><span className="text-neutral-700 text-base font-medium font-['Inter']">Hasil rekomendasi dari pertimbangan </span><span className="text-neutral-700 text-base font-bold font-['Inter']">problems, match factor, dan goals</span></div>
                    </div>
                </div>
            </div>
        </div>
    )}
    
export default reportAnalysis