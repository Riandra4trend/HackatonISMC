// pages/index.tsx
"use client";  
import { useState } from 'react';
import Pagination from "../../../components/Pagination/Pagination";
import { FaBell } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";
import { Lato } from "next/font/google";


interface transactions{
  nama : string,
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
const transactions = [
{
  nama : "PT. ABC",
  total_front : 25,
  target_profit : 30.000,
  OOC_Loader : 10,
  OOC_Hauler : 10,
  Rate : 1000,
  OHDA: 1000,
  fuel_price : 10.000,
  batas_emisi : 100,
  target_produksi: 100,
  RFU_Loader : 10,
  RFU_Hauler : 10,
},
];

const Config = () => {
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
  
  // const applyFiltersAndSort = (data :transactions) => {
  //   let filteredData = data;
    
  //   if (searchKeyword !== "") {
  //     filteredData = filteredData.filter((item) =>
  //       item.nama.toLowerCase().includes(searchKeyword.toLowerCase())
  //     );
  //   }
  //   return filteredData;
  // };

  // const filteredAndSortedData = applyFiltersAndSort(clothes);

  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchKeyword(event.target.value);
  // };
  const filteredAndSortedData = transactions;

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
              <div className="w-[141px] h-9 relative rounded-[20px] border border-lime-500 cursor-pointer" onClick={handleSave}>
                <div className="left-[53px] top-[-4px] absolute text-center text-lime-500 text-base font-semibold font-['Lato'] leading-[44px]">Save</div>
              </div>
              </div>
            </div>
            <div >
              <div className='p-4 w-full bg-white rounded-[16px] flex flex-row gap-5'>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <h1>Total Front</h1>
                    <input type="text" placeholder='    Total Front' className='border border-black rounded-full' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Total Front</h1>
                    <input type="text" placeholder='    Total Front' className='border border-black rounded-full' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Total Front</h1>
                    <input type="text" placeholder='    Total Front' className='border border-black rounded-full' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Total Front</h1>
                    <input type="text" placeholder='    Total Front' className='border border-black rounded-full' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Total Front</h1>
                    <input type="text" placeholder='    Total Front' className='border border-black rounded-full' />
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <h1>Total Front</h1>
                    <input type="text" placeholder='    Total Front' className='border border-black rounded-full' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Total Front</h1>
                    <input type="text" placeholder='    Total Front' className='border border-black rounded-full' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Total Front</h1>
                    <input type="text" placeholder='    Total Front' className='border border-black rounded-full' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Total Front</h1>
                    <input type="text" placeholder='    Total Front' className='border border-black rounded-full' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1>Total Front</h1>
                    <input type="text" placeholder='    Total Front' className='border border-black rounded-full' />
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
                    <td className="text-center py-4">{item.total_front}</td>
                    <td className="text-center py-4">{item.target_profit}</td>
                    <td className="text-center py-4">{item.OOC_Loader}</td>
                    <td className="text-center py-4">{item.OOC_Hauler}</td>
                    <td className="text-center py-4">{item.Rate}</td>
                    <td className="text-center py-4">{item.OHDA}</td>
                    <td className="text-center py-4">{item.fuel_price}</td>
                    <td className="text-center py-4">{item.batas_emisi}</td>
                    <td className="text-center py-4">{item.target_produksi}</td>
                    <td className="text-center py-4">{item.RFU_Loader}</td>
                    <td className="text-center py-4">{item.RFU_Hauler}</td>
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
