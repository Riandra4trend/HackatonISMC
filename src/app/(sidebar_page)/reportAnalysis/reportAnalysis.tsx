import { FaTruckMonster,FaBell } from "react-icons/fa";

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
                    </div>
                    <div className="h-[177px] bg-white rounded-[16px]">
                    </div>
                </div>
                <div className="w-full h-[370px] bg-white rounded-[16px]">
                    hello
                </div>
            </div>
            <div className="w-full h-[472px] bg-white rounded-[16px]">

            </div>
        </div>
    )}
    
export default reportAnalysis