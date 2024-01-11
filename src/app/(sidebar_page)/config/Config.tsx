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
  total_front : number,
  target_profit : number,
  OOC_Loader : number,
  OOC_Hauler : number,
  Rate : number,
  OHDA: number,
  fuel_price : number,
  batas_emisi : number,
  target_produksi: number,
  RFU_Loader : number,
  RFU_Hauler : number,
}

const Config = ({config} : {config: Configuration[]}) => {
  const [newConfig, setNewConfig] = useState<ConfigType>(
    {
      total_front : 0,
      target_profit : 0,
      OOC_Loader : 0,
      OOC_Hauler : 0,
      Rate : 0,
      OHDA: 0,
      fuel_price : 0,
      batas_emisi : 0,
      target_produksi: 0,
      RFU_Loader : 0,
      RFU_Hauler : 0,
    }
  );

  const handleCreateItem = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("create", newConfig);

    if (!newConfig.total_front || !newConfig.target_profit || !newConfig.OOC_Loader || !newConfig.OOC_Hauler || !newConfig.Rate || !newConfig.OHDA || !newConfig.fuel_price || !newConfig.batas_emisi || !newConfig.target_produksi || !newConfig.RFU_Loader || !newConfig.RFU_Hauler) {
      toast.error("Please fill all the fields.");
      return;
    }

    try {
      // Adjust the API endpoint and server-side logic based on your requirements
      const response = await fetch(
        process.env.NEXT_PUBLIC_WEB_URL + "/api/v1/Config",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            jumlahFront : newConfig.total_front,
            targetProfit : newConfig.target_profit,
            oocLoader : newConfig.OOC_Loader,
            oocHauler : newConfig.OOC_Hauler,
            rate : newConfig.Rate,
            ohda: newConfig.OHDA,
            fuelPrice : newConfig.fuel_price,
            batasEmissi : newConfig.batas_emisi,
            targetProduksi: newConfig.target_produksi,
            rfuLoader : newConfig.RFU_Loader,
            rfuHauler : newConfig.RFU_Hauler,
          }),
        }
      );

      if (response?.ok) {
        setNewConfig({
          total_front : 0,
          target_profit : 0,
          OOC_Loader : 0,
          OOC_Hauler : 0,
          Rate : 0,
          OHDA: 0,
          fuel_price : 0,
          batas_emisi : 0,
          target_produksi: 0,
          RFU_Loader : 0,
          RFU_Hauler : 0,
        });
        toast.success("Successfully create item.");
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

  const handleDelete = async (clotheId: string) => {
    try {
      // Adjust the API endpoint and server-side logic based on your requirements
      const response = await fetch(
        process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/JenisPakaian/${clotheId}`,
        {
          method: "DELETE",
        }
      );

      if (response?.ok) {
        toast.success("Successfully delete item.");
        router.refresh();
      } else {
        toast.error("Error deleting item.");
        throw new Error("Error deleting item.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error deleting item");
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
  const handleSave = () => {
    setIsEdit(!isEdit);
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setNewConfig((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };
  
  // const applyFiltersAndSort = (data : Configuration[]) => {
  //   let filteredData = data;
    
  //   if (searchKeyword !== "") {
  //     filteredData = filteredData.filter((item) =>
  //       item.jumlahFront.includes(searchKeyword.toLowerCase())
  //     );
  //   }
  //   return filteredData;
  // };

  // const filteredAndSortedData = applyFiltersAndSort(clothes);

  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchKeyword(event.target.value);
  // };
  // const filteredAndSortedData = transactions;

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
                    <input type="text" 
                    placeholder='    Total Front' 
                    className='border border-black rounded-full'
                    value={newConfig.total_front}
                    onChange={handleInputChange}
                     />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Target Profit</h1>
                    <input type="text" placeholder='    Target Profit' className='border border-black rounded-full' 
                    value={newConfig.target_profit}
                    onChange={handleInputChange}
                  />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>OOC_Loader</h1>
                    <input type="text" placeholder='    OOC_Loader' className='border border-black rounded-full'
                    value={newConfig.OOC_Loader}
                    onChange={handleInputChange}
                     />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>OOC_Hauler</h1>
                    <input type="text" placeholder='    OOC_Hauler' className='border border-black rounded-full'
                    value={newConfig.OOC_Hauler}
                    onChange={handleInputChange}
                     />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Rate</h1>
                    <input type="text" placeholder='    Rate' className='border border-black rounded-full'
                    value={newConfig.Rate}
                    onChange={handleInputChange}
                     />
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <h1>OHDA</h1>
                    <input type="text" placeholder='    OHDA' className='border border-black rounded-full'
                    value={newConfig.OHDA}
                    onChange={handleInputChange}
                     />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Fuel Price</h1>
                    <input type="text" placeholder='    Fuel Price' className='border border-black rounded-full'
                    value={newConfig.fuel_price}
                    onChange={handleInputChange}
                     />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Batas Emisi</h1>
                    <input type="text" placeholder='    Batas Emisi' className='border border-black rounded-full'
                    value={newConfig.batas_emisi}
                    onChange={handleInputChange}
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Target Produksi</h1>
                    <input type="text" placeholder='    Target Produksi' className='border border-black rounded-full'
                    value={newConfig.target_produksi}
                    onChange={handleInputChange}
                     />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>RFU Hauler</h1>
                    <input type="text" placeholder='    RFU Hauler' className='border border-black rounded-full' 
                    value={newConfig.RFU_Hauler}
                    onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                <div className='flex flex-col gap-2'>
                    <h1>RFU Loader</h1>
                    <input type="text" placeholder='    RFU Loader' className='border border-black rounded-full' 
                    value={newConfig.RFU_Loader}
                    onChange={handleInputChange}
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
