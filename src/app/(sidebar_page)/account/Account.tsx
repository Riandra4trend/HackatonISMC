"use client";
import Image from "next/image";
import { FaBell,FaUser } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
// import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
import  Config  from "../../../components/Sidebar"

export default function Vehicle() {
  const router = useRouter();
  const [editUsername,setEditUsername] = useState(false)
  const user = {
    user_id:'1',
    username:'ecoptimine',
    isManager:'false',
  }

  return (

      <div className="bg-[#F7F7F7] flex flex-col p-[24px] gap-[24px] w-full">
        <div className="w-full h-20 bg-white rounded-[16px] text-black flex flex-row px-5 justify-between items-center">
          <h1 className="font-bold my-auto text-2xl">
            Manage Account
          </h1>
          <FaBell className="text-gray-500"></FaBell>
        </div>
        <div className="w-full h-full flex-row flex flex-wrap gap-[24px] justify-center overflow-y-hiddem lg:overflow-hidden" id="style-2">
            <div className="rounded-[16px] p-20 bg-white flex w-full h-fit justify-center items-center flex-row gap-5 flex-col lg:flex-row">
              <div className="items-center flex flex-col gap-2">
                <FaUser className="w-[150px] h-[150px] text-black">

                </FaUser>
                <p className="my-auto font-medium text-lg text-gray-500">{user.isManager? "Manager" : "Operational"}</p>
                <div className="text-white w-fit px-2 py-1 bg-red-600 hover:bg-red-400 max-h-[20px] rounded-[12px] px-2 text-[12px] flex flex-row items-center justify-center cursor-pointer">
                  Delete Account
                </div>
              </div>
              <div className="flex-row items-center text-black w-full h-full max-w-[600px] justify-center gap-2">
                <div className="gap-1">
                  <p>
                    Username
                  </p>
                  <div className="flex items-center bg-gray-300 rounded-[16px] pr-2">
                    <input className="bg-gray-300 w-full focus:ring-0 focus:outline-none px-2 py-1 text-sm rounded-[16px]"></input>
                    {editUsername?<FaCheck className="cursor-pointer" onClick={()=>{setEditUsername(false)}}></FaCheck>:<MdEdit className="cursor-pointer" onClick={()=>{setEditUsername(true)}}></MdEdit>}
                  </div>
                </div>
                <div className="gap-1">
                  <p>
                    Old Password
                  </p>
                  <div className="flex items-center bg-gray-300 rounded-[16px] pr-2">
                    <input className="bg-gray-300 w-full focus:ring-0 focus:outline-none px-2 py-1 text-sm rounded-[16px]"></input>
                    {/* {editUsername?<FaCheck className="cursor-pointer" onClick={()=>{setEditUsername(false)}}></FaCheck>:<MdEdit className="cursor-pointer" onClick={()=>{setEditUsername(true)}}></MdEdit>} */}
                  </div>
                </div>
                <div className="gap-1 flex">
                  <div className="w-full">
                    <p>
                      New Password
                    </p>
                    <div className="flex items-center bg-gray-300 rounded-[16px] pr-2">
                      <input className="bg-gray-300 w-full focus:ring-0 focus:outline-none px-2 py-1 text-sm rounded-[16px]"></input>
                    </div>
                  </div>
                  <div className="w-full">
                    <p>
                      Confirm Password
                    </p>
                    <div className="flex items-center bg-gray-300 rounded-[16px] pr-2">
                      <input className="bg-gray-300 w-full focus:ring-0 focus:outline-none px-2 py-1 text-sm rounded-[16px]"></input>
                    </div>
                  </div>
                </div>
                <div className="gap-1 justify-center flex mt-4">
                  <div className="text-white w-fit bg-gray-600 hover:bg-gray-400 rounded-[12px] px-2 text-[12px] flex flex-row items-center justify-center cursor-pointer py-1">
                    Change Password
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
  );
}
