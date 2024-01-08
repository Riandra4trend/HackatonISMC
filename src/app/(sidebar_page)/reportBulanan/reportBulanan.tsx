"use client";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const months = [
  {
    value: "01",
    label: "Jan",
  },
  {
    value: "02",
    label: "Feb",
  },
  {
    value: "03",
    label: "Mar",
  },
  {
    value: "04",
    label: "Apr",
  },
  {
    value: "05",
    label: "May",
  },
  {
    value: "06",
    label: "Jun",
  },
  {
    value: "07",
    label: "Jul",
  },
  {
    value: "08",
    label: "Aug",
  },
  {
    value: "09",
    label: "Sep",
  },
  {
    value: "10",
    label: "Oct",
  },
  {
    value: "11",
    label: "Nov",
  },
  {
    value: "12",
    label: "Dec",
  },
];

const years = [
  {
    value: "2025",
    label: "2025",
  },
  {
    value: "2024",
    label: "2024",
  },
  {
    value: "2023",
    label: "2023",
  },
  {
    value: "2022",
    label: "2022",
  },
  {
    value: "2021",
    label: "2021",
  },
  {
    value: "2020",
    label: "2020",
  },
  {
    value: "2019",
    label: "2019",
  },
  {
    value: "2018",
    label: "2018",
  },
];
const fleets = [
    {
        nama : "Fleet 1",
        problem : "jalan berlubang",
        carbonEmision : "0.5 ton",
        matchFactor : 0.8,
        goals : "Carbon emission under 0,5 Ton, Only use 2 haulers, etc., Carbon emission under 0,5 Ton, Only use 2 haulers, etc.Carbon emission under 0,5 Ton, Only use 2 haulers, etc.Carbon emission under 0,5 Ton, Only use 2 haulers, etc."
    },
    {
        nama : "Fleet 2",
        problem : "debu tebal",
        carbonEmision : "0.8 ton",
        matchFactor : 0.9,
        goals : "Carbon emission under 0,5 Ton, Only use 2 haulers, etc."
    },
    {
        nama : "Fleet 3",
        problem : "jalan licin",
        carbonEmision : "0.9 ton",
        matchFactor : 1.01,
        goals : "Carbon emission under 0,5 Ton, Only use 2 haulers, etc."
    },
    {
        nama : "Fleet 1",
        problem : "jalan berlubang",
        carbonEmision : "0.5 ton",
        matchFactor : 0.8,
        goals : "Carbon emission under 0,5 Ton, Only use 2 haulers, etc."
    },
    {
        nama : "Fleet 2",
        problem : "debu tebal",
        carbonEmision : "0.8 ton",
        matchFactor : 0.9,
        goals : "Carbon emission under 0,5 Ton, Only use 2 haulers, etc."
    },
    {
        nama : "Fleet 3",
        problem : "jalan licin",
        carbonEmision : "0.9 ton",
        matchFactor : 1.01,
        goals : "Carbon emission under 0,5 Ton, Only use 2 haulers, etc."
    },
];

  const applyFiltersAndSort = (
    // data: JenisPakaian[]
    ) => {
    let filteredData = fleets;
    
    if (searchKeyword !== "") {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }
    return filteredData;
  };

  Menampilkan data sudah jalan atau belum
  const filteredAndSortedData = applyFiltersAndSort(clothes);
const ReportBulanan = () => {
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");
  
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(event.target.value);
    };
  
    const handleMonthClick = (value: any) => {
      setSelectedMonth(value);
    };
  
    const handleYearClick = (value: any) => {
      setSelectedYear(value);
    };
  
    return (
      <div className="w-full bg-[#F7F7F7] flex flex-col p-[24px] gap-4">
        <div className="w-full h-20 bg-white rounded-[16px] text-black flex flex-row px-5 justify-between items-center">
          <div>
            <h1 className="font-bold my-auto text-2xl p-2">
              Report Bulanan
            </h1>
            <p className="text-slate-500 text-xs font-normal font-['Inter'] px-2">
              Report Overview
            </p>
          </div>
          <div className="p-[7px] bg-gray-200 cursor-pointer rounded-full">
            <FaBell className="text-gray-500" />
          </div>
        </div>
        <div className="w-full h-[340px] p-7 bg-white rounded-[16px]">
          <div className="text-neutral-700 text-2xl font-bold font-['Open Sans'] leading-7">
            Months
          </div>
          {months.length > 0 && years.length > 0 && (
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-4 mt-4">
                {months.map((item, index) => (
                  <button
                    key={index}
                    className={`rounded-full px-3 py-[6px] cursor-pointer ${
                      selectedMonth === item.value
                        ? "bg-black text-white"
                        : "bg-[#EBEBEB] text-[#AFAFAF]"
                    }`}
                    onClick={() => handleMonthClick(item.value)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="text-neutral-700 text-2xl mt-5 font-bold font-['Open Sans'] leading-7">
            Year
          </div>
          {years.length > 0 && years.length > 0 && (
            <div className="flex flex-col gap-9">
              <div className="flex flex-row gap-4 mt-4">
                {years.map((item, index) => (
                  <button
                    key={index}
                    className={` rounded-full px-3 py-[6px] cursor-pointer ${
                      selectedYear === item.value
                        ? "bg-black text-white"
                        : "bg-[#EBEBEB] text-[#AFAFAF]"
                    }`}
                    onClick={() => handleYearClick(item.value)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="bg-slate-200 py-[13px] w-[600px] p-6 rounded-full border flex items-center">
                <div className="items-center flex ">
                  <IoIosSearch className="w-[24px] h-[24px] fill-current text-[#818181]" />
                </div>
                <input
                  type="text"
                  className=" p-1 text-[#818181] text-sm font-normal ml-3 bg-transparent outline-none"
                  placeholder="Search Fleet"
                  onChange={handleSearch}
                />
              </div>
            </div>
          )}
        </div>
        {/* Kotak penampung card */}
        <div className="w-full h-[502px] bg-white rounded-[16px] overflow-y-scroll" id="style-2">
          <div className="mx-[30px] my-[28px] flex flex-wrap justify-center gap-8">
            {/* Kode fleet card */}
            {fleets.map((item, index) => (
              <div
                key={index}
                className="bg-white w-[308px] h-[446px] rounded-[10px] shadow-xl overflow-y-scroll pl-4 py-5" id="style-2"
              >
                <h1 className="text-neutral-700 text-base font-bold font-['Inter']">
                  {" "}
                  {item.nama}
                </h1>
                <div className="flex flex-col gap-[26px]">
                  <div className="flex flex-col gap-4">
                    <p className="text-zinc-500 text-base font-medium font-['Inter']">
                      Problems
                    </p>
                    <p className="text-neutral-700 text-base font-normal font-['Inter']">
                      {item.problem}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-zinc-500 text-base font-medium font-['Inter']">
                      Carbon Emission
                    </p>
                    <p className="text-neutral-700 flex flex-wrap text-base font-normal font-['Inter']">
                      {item.carbonEmision}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-zinc-500 text-base font-medium font-['Inter']">
                      Match Vector
                    </p>
                    <p className="text-neutral-700 text-base font-normal font-['Inter']">
                      {item.matchFactor}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-zinc-500 text-base flex flex-wrap font-medium font-['Inter']">
                      Goals
                    </p>
                    <p className="text-neutral-700 text-base font-normal font-['Inter']">
                      {item.goals}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ReportBulanan;