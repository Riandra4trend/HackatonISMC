"use client";
import Image from "next/image";
import { FaTruckMonster,FaBell } from "react-icons/fa";
import { useState } from "react";
// import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
// import  Config  from "../../components/Sidebar"
export default function Vehicle() {
  const router = useRouter();

  const vehicleData = [
    {
    vehicle_id:"V83283",
    fleet_id:"-",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
    {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
    {
    vehicle_id:"V83283",
    fleet_id:"-",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
    {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
    {
    vehicle_id:"V83283",
    fleet_id:"-",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
    {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
    {
    vehicle_id:"V83283",
    fleet_id:"-",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
    {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
    {
    vehicle_id:"V83283",
    fleet_id:"-",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
    {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
    {
    vehicle_id:"V83283",
    fleet_id:"-",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
  {
    vehicle_id:"V83283",
    fleet_id:"F23560",
    production:"405.1",
    TotalKM:"4000",
    TopSpeed:"12"
  },
]

  return (

      
      <div className="w-full bg-[#F7F7F7] flex flex-col p-[24px] gap-[24px]">
        <div className="w-full h-20 bg-white rounded-[16px] text-black flex flex-row px-5 justify-between items-center">
          <h1 className="font-bold my-auto text-2xl p-2">
            Vehicle Overview
          </h1>
          <FaBell className="text-gray-500"></FaBell>
        </div>
        <div className="w-full h-fit flex-row flex flex-wrap gap-[24px] justify-center overflow-y-scroll" id="style-2">
          {vehicleData.map((vehicle,index)=>(
            <div className="w-[300px] h-[120px] bg-white rounded-[16px] flex flex-col justify-center p-[24px]">
              <div className="flex-row flex items-center justify-between">  
                <p className="text-gray-400 text-[15px]">{vehicle.fleet_id}</p>
                <div className={index % 2 == 0? "rounded-full w-[15px] h-[15px] bg-red-400": "rounded-full w-[15px] h-[15px] bg-green-400"}>
              </div>
            </div>
                <div className="flex gap-1 items-center">
                  <FaTruckMonster className="w-[20px] h-[20px] my-auto text-black">
                  </FaTruckMonster>
                  <p className="text-black font-bold text-[20px]">{vehicle.vehicle_id}</p>
                  {/* <div className="w-full flex flex-row justify-center items-center"> */}
                    <div className="bg-gray-700 hover:bg-gray-600 max-h-[20px] rounded-[12px] px-2 text-[12px] flex flex-row items-center cursor-pointer">
                        Assign
                      </div>
                  {/* </div> */}
                </div>

              <div className="flex justify-evenly text-black text-[10px] text-center my-1">
                <div>
                  <p>Production</p>
                  <p className="text-gray-500">{vehicle.production}</p>
                </div>
                <div>
                  <p>Total KM</p>
                  <p className="text-gray-500">{vehicle.TotalKM}</p>
                </div>
                <div>
                  <p>Top Speed</p>
                  <p className="text-gray-500">{vehicle.TopSpeed} KM/H</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    
  );
}
