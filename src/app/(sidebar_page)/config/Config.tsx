// pages/index.tsx
"use client";  
import Pagination from "../../../components/Pagination/Pagination";
import { FaBell } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";
import React, { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Configuration } from "@prisma/client";
import { useRouter } from "next/navigation";


interface ConfigType{
            jumlahFront : number,
            targetProfit : number,
            oocLoader : number,
            oocHauler : number,
            rate : number,
            ohda: number,
            fuelPrice : number,
            batasEmissi : number,
            targetProduksi: number,
            rfuLoader : number,
            rfuHauler : number,
}

const Config = ({config} : {config: Configuration[]}) => {
  const [newConfig, setNewConfig] = useState<ConfigType>(
    {
      jumlahFront : 0,
      targetProfit : 0,
      oocLoader : 0,
      oocHauler : 0,
      rate : 0,
      ohda: 0,
      fuelPrice : 0,
      batasEmissi : 0,
      targetProduksi: 0,
      rfuLoader : 0,
      rfuHauler : 0,
    }
  );

  const handleCreateItem = async (e: FormEvent<HTMLButtonElement>) => {
    if (!newConfig.jumlahFront || !newConfig.targetProfit || !newConfig.oocLoader || !newConfig.oocHauler || !newConfig.rate || !newConfig.ohda || !newConfig.fuelPrice || !newConfig.batasEmissi || !newConfig.targetProduksi || !newConfig.rfuLoader || !newConfig.rfuHauler) {
      toast.error("Please fill all the fields.");
      return;
    }
    
    try {
      // Adjust the API endpoint and server-side logic based on your requirements
      const response = await fetch(
        process.env.NEXT_PUBLIC_WEB_URL + "/api/v1/config",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            jumlahFront : newConfig.jumlahFront,
            targetProfit : newConfig.targetProfit,
            oocLoader : newConfig.oocLoader,
            oocHauler : newConfig.oocHauler,
            rate : newConfig.rate,
            ohda: newConfig.ohda,
            fuelPrice : newConfig.fuelPrice,
            batasEmissi : newConfig.batasEmissi,
            targetProduksi: newConfig.targetProduksi,
            rfuLoader : newConfig.rfuLoader,
            rfuHauler : newConfig.rfuHauler,
          }),
        }
      );

      if (response?.ok) {
        setNewConfig({
          jumlahFront : 0,
          targetProfit : 0,
          oocLoader : 0,
          oocHauler : 0,
          rate : 0,
          ohda: 0,
          fuelPrice : 0,
          batasEmissi : 0,
          targetProduksi: 0,
          rfuLoader : 0,
          rfuHauler : 0,
        });
        toast.success("Successfully create item.");
        setIsEdit(!isEdit);
        router.refresh();
      } else {
        toast.error("Error creating item.");
        throw new Error("Error creating item.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error posting item");
    }
  };

  const router = useRouter();
  
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleCancel = () => {
    setIsEdit(!isEdit);
  }

  
  
  

  const filteredAndSortedData = config;

  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const paginatedData = filteredAndSortedData.slice(startIndex, endIndex);
  return (
    <div className='w-full h-full bg-white'>
      {isEdit ? 
      <div className='w-full h-full bg-[#F7F7F7] flex flex-col p-[24px] gap-4'>
        <div className="w-full h-20 bg-white rounded-[16px] text-black flex flex-row px-5 justify-between items-center">
                <div>
                <h1 className="font-bold my-auto text-2xl p-2">
                    Configuration
                </h1>
                <p className="text-slate-500 text-xs font-normal font-['Inter'] px-2 pb-2">Configuration Overview</p>
                </div>
                <div className="p-[7px] bg-gray-200 cursor-pointer rounded-full">
                <FaBell className="text-gray-500"></FaBell>
                </div>
            </div>
            <div className='flex flex-col gap-9 rounded-[20px] p-7 bg-white'>
            <div className="bg-slate-200 py-[13px] w-[600px] p-6 rounded-full border flex items-center">
              <div className="items-center flex ">
                  <IoIosSearch className="w-[24px] h-[24px] fill-current text-[#818181]" />
                </div>
                <input
                  type="text"
                  className=" p-1 text-[#818181] text-sm font-normal ml-3 bg-transparent outline-none"
                  placeholder="Search Fleet"
                  // onChange={handleSearch}
                />
              </div>
              <div className='flex flex-row gap-4'>
              <div className="w-[141px] h-9 relative rounded-[20px] border border-black cursor-pointer " onClick={handleEdit}>
                <div className="left-[31px] top-[-4px] absolute text-center text-gray-900 text-base font-semibold font-['Lato'] leading-[44px]" >Edit Config</div>
              </div>
              <div className="w-[141px] h-9 relative rounded-[20px] border border-red-600 cursor-pointer" onClick={handleCancel}>
                  <div className="left-[46px] top-[-4px] absolute text-center text-red-600 text-base font-semibold font-['Lato'] leading-[44px]" >Cancel</div>
              </div>
              <button className="w-[141px] h-9 relative rounded-[20px] border border-lime-500 cursor-pointer" onClick={handleCreateItem}>
                <div className="left-[53px] top-[-4px] absolute text-center text-lime-500 text-base font-semibold font-['Lato'] leading-[44px]">Save</div>
              </button>
              </div>
            </div>
            <div >
              <div className='p-4 w-full bg-white rounded-[16px] flex flex-row gap-5'>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <h1>Total Front</h1>
                    <input type="number"
                    placeholder='    Total Front' 
                    className='border border-black rounded-full'
                    onChange= {(e) => setNewConfig({ ...newConfig, jumlahFront: parseInt(e.target.value) })}
                     />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Target Profit</h1>
                    <input type="text" placeholder='    Target Profit' className='border border-black rounded-full' 
                    onChange= {(e) => setNewConfig({ ...newConfig, targetProfit: parseInt(e.target.value) })}
                  />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>OOC_Loader</h1>
                    <input type="text" placeholder='    OOC_Loader' className='border border-black rounded-full'
                    onChange= {(e) => setNewConfig({ ...newConfig, oocLoader: parseInt(e.target.value)  })}
                     />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>OOC_Hauler</h1>
                    <input type="text" placeholder='    OOC_Hauler' className='border border-black rounded-full'
                    onChange= {(e) => setNewConfig({ ...newConfig, oocHauler: parseInt(e.target.value)  })}
                     />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Rate</h1>
                    <input type="text" placeholder='    Rate' className='border border-black rounded-full'
                    onChange= {(e) => setNewConfig({ ...newConfig, rate: parseInt(e.target.value)  })}
                     />
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <h1>OHDA</h1>
                    <input type="text" placeholder='    OHDA' className='border border-black rounded-full'
                    onChange= {(e) => setNewConfig({ ...newConfig, ohda: parseInt(e.target.value)  })}
                     />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Fuel Price</h1>
                    <input type="text" placeholder='    Fuel Price' className='border border-black rounded-full'
                    onChange= {(e) => setNewConfig({ ...newConfig, fuelPrice: parseInt(e.target.value)  })}
                     />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Batas Emisi</h1>
                    <input type="text" placeholder='    Batas Emisi' className='border border-black rounded-full'
                    onChange= {(e) => setNewConfig({ ...newConfig, batasEmissi: parseInt(e.target.value)  })}
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Target Produksi</h1>
                    <input type="text" placeholder='    Target Produksi' className='border border-black rounded-full'
                    onChange= {(e) => setNewConfig({ ...newConfig, targetProduksi: parseInt(e.target.value)  })}
                     />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>RFU Hauler</h1>
                    <input type="text" placeholder='    RFU Hauler' className='border border-black rounded-full' 
                    onChange= {(e) => setNewConfig({ ...newConfig, rfuHauler: parseInt(e.target.value)  })}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                <div className='flex flex-col gap-2'>
                    <h1>RFU Loader</h1>
                    <input type="text" placeholder='    RFU Loader' className='border border-black rounded-full' 
                    onChange= {(e) => setNewConfig({ ...newConfig, rfuLoader: parseInt(e.target.value)  })}
                    />
                  </div>
                </div>
              </div>
            </div>
      </div>
      : 
      <div className="w-full h-full bg-[#F7F7F7] flex flex-col p-[24px] gap-4">
            <div className="w-full h-20 bg-white rounded-[16px] text-black flex flex-row px-5 justify-between items-center">
                <div>
                <h1 className="font-bold my-auto text-2xl p-2">
                    Configuration
                </h1>
                <p className="text-slate-500 text-xs font-normal font-['Inter'] px-2 pb-2">Configuration Overview</p>
                </div>
                <div className="p-[7px] bg-gray-200 cursor-pointer rounded-full">
                <FaBell className="text-gray-500"></FaBell>
                </div>
            </div>
            <div className=' flex flex-col gap-9 rounded-[20px] p-7 bg-white'>
            <div className="bg-slate-200 py-[13px] w-[600px] p-6 rounded-full border flex items-center">
              <div className="items-center flex ">
                  <IoIosSearch className="w-[24px] h-[24px] fill-current text-[#818181]" />
                </div>
                <input
                  type="text"
                  className=" p-1 text-[#818181] text-sm font-normal ml-3 bg-transparent outline-none"
                  placeholder="Search Fleet"
                  // onChange={handleSearch}
                />
              </div>
              <div>
                <div className="w-[141px] h-9 relative rounded-[20px] border border-black cursor-pointer" onClick={handleEdit}>
                  <div className="left-[31px] top-[-4px] absolute text-center text-gray-900 text-base font-semibold font-['Poppins'] leading-[44px]" >Edit Config</div>
                </div>
              </div>
              
              
            </div>

        <div className='w-full flex flex-col justify-between'>
          <table className="w-full mt-4 rounded-[16px] overflow-hidden bg-white">
            <thead className="w-full mt-4 rounded-[16px] overflow-hidden bg-white">
              <tr>
                <th className="text-center py-4 px-5">Total Front</th>
                <th className="text-center py-4 px-5">Target Profit</th>
                <th className="text-center py-4 px-5">OOC Loader</th>
                <th className="text-center py-4 px-5">OOC Hauler</th>
                <th className="text-center py-4 px-5">Rate</th>
                <th className="text-center py-4 px-5">OHDA</th>
                <th className="text-center py-4 px-5">Fuel Price</th>
                <th className="text-center py-4 px-5">Batas Emisi</th>
                <th className="text-center py-4 px-5">Target Produksi</th>
                <th className="text-center py-4 px-5">RFU Loader</th>
                <th className="text-center py-4 px-5">RFU Hauler</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => {
                // const backgroundColorClass =
                  // index % 2 === 0 ? "bg-[#F3F3F3]" : "bg-[#FDFDFD]";
                return (
                  <tr
                    key={index}
                    className={`rounded-lg bg-white border-b-2 border-gray-200`}
                  >
                    <td className="text-center py-4">{item.jumlahFront}</td>
                    <td className="text-center py-4">{item.targetProfit}</td>
                    <td className="text-center py-4">{item.oocLoader}</td>
                    <td className="text-center py-4">{item.oocHauler}</td>
                    <td className="text-center py-4">{item.rate}</td>
                    <td className="text-center py-4">{item.ohda}</td>
                    <td className="text-center py-4">{item.fuelPrice}</td>
                    <td className="text-center py-4">{item.batasEmissi}</td>
                    <td className="text-center py-4">{item.targetProduksi}</td>
                    <td className="text-center py-4">{item.rfuLoader}</td>
                    <td className="text-center py-4">{item.rfuHauler}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-8">
            <Pagination
              totalDataCount={filteredAndSortedData.length}
              currentPage={currentPage}
              pageSize={10}
              onPageChange={(n: number | string) => {
                if (typeof n === "string") return;
                setCurrentPage(n);
              }}
            />
          </div>
        </div>
      </div>
      }
      
    </div>
  );
};

export default Config;
