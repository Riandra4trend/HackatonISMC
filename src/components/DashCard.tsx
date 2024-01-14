"use client"

import Image from "next/image"
import { FaArrowUpLong } from "react-icons/fa6"
import { FaArrowDownLong } from "react-icons/fa6"
import { useRouter } from 'next/navigation'
import { fleetProps } from "../../types"

export default function DashCard({data} : {data: fleetProps}) {
    const router = useRouter()

    return(
        <div className="bg-white shadow-xl rounded-[20px] w-fit h-full pb-2">
            <Image 
                src="/landing/tone1.svg" 
                alt="cctv" 
                width={296} 
                height={185}
                className="rounded-[20px]"
            />
            <div className="py-2 px-5 flex flex-col gap-2">
                <h1 className="text-neutral-700 text-lg font-inter">
                    Fleet {data.id}
                </h1>
                <div className="flex gap-5">
                    <div className="flex flex-col justify-between">
                        <p className="text-slate-500 text-xs font-normal font-inter">Hauler's condition</p>
                        <div className="flex justify-around text-black items-center text-md">
                            <div className="flex gap-1 items-center">
                                <FaArrowUpLong className="text-green-500"></FaArrowUpLong>
                                <p>{data.push}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <FaArrowDownLong className="text-red-500 font-bold"></FaArrowDownLong>
                                <p>{data.pop}</p>
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
    )
}