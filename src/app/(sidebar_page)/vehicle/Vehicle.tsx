"use client";
import Image from "next/image";
import { FaTruckMonster,FaBell } from "react-icons/fa";
import { GiMineTruck } from "react-icons/gi";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import Modal from 'react-modal';
import toast from "react-hot-toast";
export default function Vehicle() {
  const router = useRouter();
  const [hauler,setHauler] = useState([])
  const [loader,setLoader] = useState([])
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [idActive,setIdActive] = useState(null);
  const customStyles = {
    content: {
        backgroundColor:'#1C2540',
        whiteSpace: 'pre-line',
        borderRadius:'20px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        textAlign:'center',
        color : '#FFFFFF',
        paddingBottom : '70px',
        width:'50%',
        heigth:'50%',
    },
  };
  async function FetchVehicle() {
    const dataTemp = await axios.get(process.env.NEXT_PUBLIC_WEB_URL + '/api/vehicle');
    setHauler(dataTemp.data.Hauler)
    setLoader(dataTemp.data.Loader)
  }
  useEffect(()=>{
    FetchVehicle()
  },[])

  const handleAssign = async (fleetid:number,haulerid:number) => {
    try {
      const res = await axios.patch(process.env.NEXT_PUBLIC_WEB_URL + '/api/vehicle',{
        fleetid : fleetid ,
        haulerid : idActive
      })
      FetchVehicle()
      await setIsOpen(false)
    } catch (error: any) {
      toast.error(error.message || 'An error occurred'); // Use a fallback message if 'message' is undefined
    }
  }

  return (
      <div className="w-full bg-[#F7F7F7] flex flex-col p-[24px] gap-[24px]">
        <div className="w-full h-[10%] bg-white rounded-[16px] text-black flex flex-row px-5 justify-between items-center">
          <h1 className="font-bold my-auto text-2xl p-2">
            Vehicle Overview
          </h1>
          <FaBell className="text-gray-500"></FaBell>
        </div>
        <div className="flex flex-row lg:flex-col w-full h-[90%]">
        <div className="w-full lg:h-[30%] flex-row flex flex-wrap gap-[24px] justify-center overflow-y-scroll lg:border-b-2 py-[24px]" id="style-2">
          {loader && loader.map((loader,index)=>(
            <div key={index} className="w-[300px] h-[120px] bg-white rounded-[16px] flex flex-col justify-center p-[24px] shadow-md">
              <div className="flex-row flex items-center justify-between">  
                <p className="text-gray-400 text-[15px]">{loader.assign}</p>
                <div className={!loader.isReady? "rounded-full w-[15px] h-[15px] bg-red-400": "rounded-full w-[15px] h-[15px] bg-green-400"}>
              </div>
            </div>
                <div className="flex gap-1 items-center">
                  <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    width="20px" height="20px" viewBox="0 0 792.137 792.136">
                  <g>
                    <g>
                      <path d="M293.054,660.519c8.189,0,14.859-6.67,14.859-14.863c0-8.201-6.67-14.87-14.859-14.87c-8.211,0-14.881,6.669-14.881,14.87
                        C278.172,653.849,284.842,660.519,293.054,660.519z"/>
                      <path d="M193.239,658.753c7.229,0,13.115-5.872,13.115-13.1c0-7.23-5.885-13.104-13.115-13.104
                        c-7.216,0-13.091,5.873-13.091,13.104C180.147,652.881,186.022,658.753,193.239,658.753z"/>
                      <path d="M397.102,658.753c7.232,0,13.117-5.872,13.117-13.1c0-7.23-5.885-13.104-13.117-13.104c-7.217,0-13.09,5.873-13.09,13.104
                        C384.011,652.881,389.885,658.753,397.102,658.753z"/>
                      <path d="M83.519,658.753c7.229,0,13.103-5.872,13.103-13.1c0-7.23-5.874-13.104-13.103-13.104
                        c-7.218,0-13.091,5.873-13.091,13.104C70.428,652.881,76.302,658.753,83.519,658.753z"/>
                      <path d="M530.365,699.805v-3.587c25.098-3.146,44.596-24.623,44.596-50.562c0-25.947-19.498-47.425-44.596-50.57v-3.58H44.597
                        v3.58C19.485,598.232,0,619.708,0,645.656c0,25.939,19.485,47.418,44.597,50.562v3.587H530.365z M83.519,619.808
                        c12.042,0,22.095,8.312,24.957,19.476h59.815c2.848-11.164,12.9-19.476,24.947-19.476c12.042,0,22.1,8.312,24.96,19.476h48.056
                        c2.886-12.157,13.774-21.24,26.799-21.24c13.017,0,23.89,9.083,26.793,21.24h52.309c2.847-11.164,12.901-19.476,24.947-19.476
                        c12.043,0,22.1,8.312,24.959,19.476h53.084c2.857-11.164,12.916-19.476,24.957-19.476c14.25,0,25.834,11.598,25.834,25.848
                        c0,14.24-11.584,25.839-25.834,25.839c-12.041,0-22.1-8.311-24.957-19.47h-53.084c-2.857,11.159-12.916,19.47-24.959,19.47
                        c-12.044,0-22.099-8.311-24.946-19.47h-52.309c-2.903,12.154-13.776,21.236-26.793,21.236c-13.024,0-23.913-9.082-26.799-21.236
                        h-48.056c-2.86,11.159-12.918,19.47-24.96,19.47c-12.047,0-22.099-8.311-24.947-19.47h-59.815
                        c-2.862,11.159-12.915,19.47-24.957,19.47c-14.25,0-25.832-11.599-25.832-25.839C57.688,631.404,69.269,619.808,83.519,619.808z"
                        />
                      <path d="M500.102,658.753c7.219,0,13.092-5.872,13.092-13.1c0-7.23-5.873-13.104-13.092-13.104
                        c-7.229,0-13.113,5.873-13.113,13.104C486.988,652.881,492.873,658.753,500.102,658.753z"/>
                      <path d="M486.988,434.757l-42.977-74.881H307.914v68.512l-75.208,3.187v-17.521l-100.339-1.593v15.928H96.622v45.113h136.084
                        v18.593H96.622v58.292h390.366V434.757L486.988,434.757z M459.941,473.501H333.044v-91.074h95.043l31.854,45.537V473.501z"/>
                      <polygon points="426.492,269.119 557.096,170.375 557.096,114.628 397.102,210.189 333.044,340.79 426.492,340.79 		"/>
                      <polygon points="783.254,425.202 600.096,92.332 574.961,114.628 574.961,160.817 738.658,425.202 		"/>
                      <path d="M749.809,455.126c1.068,92.65-86.006,95.26-86.006,95.26c176.812,69.446,119.451-95.26,119.451-95.26H749.809
                        L749.809,455.126z"/>
                    </g>
                  </g>
                  </svg>
                  <p className="text-black font-bold text-[20px]">{loader.name}</p>
                </div>

              <div className="flex justify-evenly text-black text-[10px] text-center my-1">
                <div className="w-full">
                  <p>Productivity</p>
                  <p className="text-gray-500">{loader.productivity && loader.productivity !== 0? loader.productivity : "-"}</p>
                </div>
                <div className="w-full">
                  <p>Work Hour</p>
                  <p className="text-gray-500">{loader.workingHours}</p>
                </div>
                <div className="w-full">
                  <p>Operator</p>
                  <p className="text-gray-500 text-[8px]">{loader.operator}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
        <div className="w-full lg:h-[70%] flex-row flex flex-wrap gap-[24px] justify-center overflow-y-scroll lg:border-t-2 py-[24px]" id="style-2">
          {hauler && hauler.map((vehicle,index)=>(
            <div key={index} className="w-[300px] h-[120px] bg-white rounded-[16px] flex flex-col justify-center p-[24px] shadow-md">
              <div className="flex-row flex items-center justify-between">  
                <p className="text-gray-400 text-[15px]">{vehicle.fleet.assign + ' - ' + vehicle.fleet.name}</p>
                <div className={!vehicle.isReady? "rounded-full w-[15px] h-[15px] bg-red-400": "rounded-full w-[15px] h-[15px] bg-green-400"}>
              </div>
            </div>
                <div className="flex gap-1 items-center">
                  <GiMineTruck className="w-[20px] h-[20px] my-auto text-black">
                  </GiMineTruck>
                  <p className="text-black font-bold text-[20px]">{vehicle.name}</p>
                  <button className="w-fit h-fit text-white bg-gray-600 px-2 rounded-[16px] hover:bg-gray-500 cursor-pointer" onClick={():void=>{
                    setIdActive(vehicle.id)
                    setIsOpen(true)
                    }}>Assign</button>
                  <Modal
                      isOpen={isOpen}
                      ariaHideApp={false}
                      // onAfterOpen={afterOpenModal}
                      onRequestClose={()=>{setIsOpen(false)}}
                      contentLabel="Example Modal"
                      className="w-full h-full blueColor bg-transparent flex justify-center items-center"   
                  >
                      <div className="bg-gray-100 w-3/4 h-fit md:w-1/2 md:h-fit max-h-3/4 rounded-[12px] flex flex-col items-center text-black p-3">
                        <div className="w-full items-center justify-end flex cursor-pointer text-5xl">
                          <IoMdClose className='cursor-pointer' onClick={()=>{
                            setIsOpen(false)
                          }}></IoMdClose>
                        </div>
                        <h5 className="text-xl">Assign Fleet</h5> 
                        <div className="w-full lg:h-fit flex-row flex flex-wrap gap-[24px] justify-center overflow-y-scroll py-[24px]" id="style-2">
                          {loader && loader.map((fleet,index)=>(
                            <div key={index} className="w-[300px] h-fit bg-white rounded-[16px] flex flex-col justify-center p-[24px] shadow-md cursor-pointer" onClick={()=>{handleAssign(fleet.id,vehicle.id)}}>
                              <div className="flex-row flex items-center justify-between">  
                                <p className="text-gray-400 text-[15px]">{fleet.assign}</p>
                                <div className={!fleet.isReady? "rounded-full w-[15px] h-[15px] bg-red-400": "rounded-full w-[15px] h-[15px] bg-green-400"}>
                                </div>
                              </div>
                                <div className="flex gap-1 items-center">
                                  <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                    width="20px" height="20px" viewBox="0 0 792.137 792.136">
                                  <g>
                                    <g>
                                      <path d="M293.054,660.519c8.189,0,14.859-6.67,14.859-14.863c0-8.201-6.67-14.87-14.859-14.87c-8.211,0-14.881,6.669-14.881,14.87
                                        C278.172,653.849,284.842,660.519,293.054,660.519z"/>
                                      <path d="M193.239,658.753c7.229,0,13.115-5.872,13.115-13.1c0-7.23-5.885-13.104-13.115-13.104
                                        c-7.216,0-13.091,5.873-13.091,13.104C180.147,652.881,186.022,658.753,193.239,658.753z"/>
                                      <path d="M397.102,658.753c7.232,0,13.117-5.872,13.117-13.1c0-7.23-5.885-13.104-13.117-13.104c-7.217,0-13.09,5.873-13.09,13.104
                                        C384.011,652.881,389.885,658.753,397.102,658.753z"/>
                                      <path d="M83.519,658.753c7.229,0,13.103-5.872,13.103-13.1c0-7.23-5.874-13.104-13.103-13.104
                                        c-7.218,0-13.091,5.873-13.091,13.104C70.428,652.881,76.302,658.753,83.519,658.753z"/>
                                      <path d="M530.365,699.805v-3.587c25.098-3.146,44.596-24.623,44.596-50.562c0-25.947-19.498-47.425-44.596-50.57v-3.58H44.597
                                        v3.58C19.485,598.232,0,619.708,0,645.656c0,25.939,19.485,47.418,44.597,50.562v3.587H530.365z M83.519,619.808
                                        c12.042,0,22.095,8.312,24.957,19.476h59.815c2.848-11.164,12.9-19.476,24.947-19.476c12.042,0,22.1,8.312,24.96,19.476h48.056
                                        c2.886-12.157,13.774-21.24,26.799-21.24c13.017,0,23.89,9.083,26.793,21.24h52.309c2.847-11.164,12.901-19.476,24.947-19.476
                                        c12.043,0,22.1,8.312,24.959,19.476h53.084c2.857-11.164,12.916-19.476,24.957-19.476c14.25,0,25.834,11.598,25.834,25.848
                                        c0,14.24-11.584,25.839-25.834,25.839c-12.041,0-22.1-8.311-24.957-19.47h-53.084c-2.857,11.159-12.916,19.47-24.959,19.47
                                        c-12.044,0-22.099-8.311-24.946-19.47h-52.309c-2.903,12.154-13.776,21.236-26.793,21.236c-13.024,0-23.913-9.082-26.799-21.236
                                        h-48.056c-2.86,11.159-12.918,19.47-24.96,19.47c-12.047,0-22.099-8.311-24.947-19.47h-59.815
                                        c-2.862,11.159-12.915,19.47-24.957,19.47c-14.25,0-25.832-11.599-25.832-25.839C57.688,631.404,69.269,619.808,83.519,619.808z"
                                        />
                                      <path d="M500.102,658.753c7.219,0,13.092-5.872,13.092-13.1c0-7.23-5.873-13.104-13.092-13.104
                                        c-7.229,0-13.113,5.873-13.113,13.104C486.988,652.881,492.873,658.753,500.102,658.753z"/>
                                      <path d="M486.988,434.757l-42.977-74.881H307.914v68.512l-75.208,3.187v-17.521l-100.339-1.593v15.928H96.622v45.113h136.084
                                        v18.593H96.622v58.292h390.366V434.757L486.988,434.757z M459.941,473.501H333.044v-91.074h95.043l31.854,45.537V473.501z"/>
                                      <polygon points="426.492,269.119 557.096,170.375 557.096,114.628 397.102,210.189 333.044,340.79 426.492,340.79 		"/>
                                      <polygon points="783.254,425.202 600.096,92.332 574.961,114.628 574.961,160.817 738.658,425.202 		"/>
                                      <path d="M749.809,455.126c1.068,92.65-86.006,95.26-86.006,95.26c176.812,69.446,119.451-95.26,119.451-95.26H749.809
                                        L749.809,455.126z"/>
                                    </g>
                                  </g>
                                  </svg>
                                  <p className="text-black font-bold text-[20px]">{fleet.name}</p>
                                </div>

                            </div>
                          ))}
                        </div>
                      </div>
                  </Modal>
                </div>

              <div className="flex justify-evenly text-black text-[10px] text-center my-1">
                <div className="w-full">
                  <p>Productivity</p>
                  <p className="text-gray-500">{vehicle.productivity && vehicle.productivity !== 0? vehicle.productivity: "-"}</p>
                </div>
                <div className="w-full">
                  <p>Distance</p>
                  <p className="text-gray-500">{vehicle.distance} KM</p>
                </div>
                <div className="w-full">
                  <p>Operator</p>
                  <p className="text-gray-500 text-[8px]">{vehicle.operator}</p>
                </div>
              </div>

            </div>
          ))}
          </div>
        </div>
      </div>
  );
}
