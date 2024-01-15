"use client";

import { FaBell } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import DashCard from '@/components/DashCard';
import { useRouter } from 'next/navigation'
import { fleetProps, grafikDashProps, Fleet } from '../../../../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import glpk from 'glpk-js';
import Image from 'next/image';
import { FaArrowUpLong } from "react-icons/fa6"
import { FaArrowDownLong } from "react-icons/fa6"

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

export default async function Dashboard() {
    const router = useRouter()
    const isFleetEmpty  = !Array.isArray(fleetCard) || fleetCard.length < 1 || !fleetCard
    const isGrafikDashEmpty  = !Array.isArray(grafikDash) || grafikDash.length < 1 || !grafikDash

    const [fleets, setFleets] = useState<Fleet[]>([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(
    //           process.env.NEXT_PUBLIC_WEB_URL + '/api/fleetDashboard',
    //           {
    //             method: "GET",
    //             headers: {
    //               "Content-Type": "application/json",
    //             },
    //           }
    //         ); // Replace with your actual API endpoint
    //         const data = await response.json();
    //         console.log("fetched data :", data);
    //         setFleets(data.configuration);
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       }
    //     };
    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(
    //           process.env.NEXT_PUBLIC_WEB_URL + '/api/v1/config',
    //           {
    //             method: "GET",
    //             headers: {
    //               "Content-Type": "application/json",
    //             },
    //           }
    //         ); // Replace with your actual API endpoint
    //         const data = await response.json();
    //         console.log("fetched data :", data);
    //         setFleets(data.configuration);
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       }
    //     };
    //     fetchData();
    //   }, []);


    //   const solveLinearProgramming = (fleets: Fleet[]) => {
    //     const lp = new glpk.GLPK();
    //     const lpProblem = new glpk.Problem();
      
    //     const numberOfFleets = fleets.length;
    //     const numberOfHaulers = fleets.reduce((total, fleet) => total + fleet.haulers.length, 0);
      
    //     // Decision variables: Xn represents the number of haulers for fleet n
    //     const decisionVariables = [];
    //     for (let i = 1; i <= numberOfFleets; i++) {
    //       decisionVariables.push({
    //         name: `X${i}`,
    //         type: glpk.GLP_IV,
    //         lb: 0, // Lower bound
    //         ub: glpk.GLP_INF, // Upper bound (Infinity for no upper bound)
    //       });
    //     }
      
    //     lpProblem.addCols(decisionVariables);
      
    //     // Objective function: Maximize total profit (Z)
    //     const objectiveFunction = fleets.map((fleet, index) => (fleet.rate ?? 0) * numberOfHaulers);
    //     lpProblem.setObjCoeffs(objectiveFunction);
      
    //     // Constraints: Total number of haulers <= predefined limit (sigma Xn)
    //     const constraintCoefficients = fleets.flatMap(() => [1]); // Coefficients for each Xn variable
    //     const constraintLimits = [numberOfHaulers]; // Right-hand side of the constraint
      
    //     lpProblem.addRows([constraintCoefficients], ['LE'], constraintLimits);
      
    //     // Solve the linear programming problem
    //     const result = lpProblem.simplex();
      
    //     // Retrieve the optimal solution
    //     const optimalSolution = lpProblem.getColPrim();
      
    //     // Use the optimal solution to update your React state or perform other actions
    //     // For example, you might want to update the number of haulers for each fleet in the state
      
    //     console.log("Optimal solution:", optimalSolution);
    //   };

    //   const linearProg = solveLinearProgramming(fleets);
    
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
                                            <div className="bg-white shadow-xl rounded-[20px] w-fit h-full pb-2">
                                                <Image 
                                                    src="/landing/tone1.svg" 
                                                    alt="cctv" 
                                                    width={316} 
                                                    height={185}
                                                    className="rounded-[20px]"
                                                />
                                                <div className="py-2 px-5 flex flex-col gap-2">
                                                    <h1 className="text-neutral-700 text-lg font-inter">
                                                        Fleet {item.id}
                                                    </h1>
                                                    <div className="flex gap-5">
                                                        <div className="flex flex-col justify-between">
                                                            <p className="text-slate-500 text-xs font-normal font-inter">Hauler's condition</p>
                                                            <div className="flex justify-around text-black items-center text-md">
                                                                <div className="flex gap-1 items-center">
                                                                    <FaArrowUpLong className="text-green-500"></FaArrowUpLong>
                                                                    <p>{item.push}</p>
                                                                </div>
                                                                <div className="flex gap-1 items-center">
                                                                    <FaArrowDownLong className="text-red-500 font-bold"></FaArrowDownLong>
                                                                    <p>{item.pop}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button 
                                                                className="border-2 border-[#0F231F] text-[#0F231F] font-inter p-3 rounded-[20px] text-sm"
                                                                onClick={() => router.push("/dashboard/productionOverview")}
                                                            >
                                                                Production Overview
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                                88%
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