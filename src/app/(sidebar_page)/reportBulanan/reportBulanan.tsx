// Function to calculate matchVector
// const calculateMatchVector = (prodtyValues: number[], haulersCount: number) => {
//   const currentProdty = prodtyValues[new Date().getSeconds() / 30];
//   const totalProdty = prodtyValues.reduce((sum, prodty) => sum + prodty, 0);
//   const matchVectorValue = data.fleets.prodtyLoader / (haulersCount * currentProdty);
//   return matchVectorValue;
// };

// useEffect(() => {
//   // Set up a timer to recalculate matchVector every 30 seconds
//   const timer = setInterval(() => {
//     // Use the calculateMatchVector function with current fleet data
//     const newMatchVector = calculateMatchVector(item.prodtys.map((p) => p.prodty ?? 0), item.haulers.length);
//     setMatchVector(newMatchVector);
//   }, 30000); // 30 seconds interval

//   // Initial calculation on component mount
//   const initialMatchVector = calculateMatchVector(item.prodtys.map((p) => p.prodty ?? 0), item.haulers.length);
//   setMatchVector(initialMatchVector);

//   // Clear the timer on component unmount
//   return () => clearInterval(timer);
// }, [item]);

"use client";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useEffect } from "react";


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

interface Hauler {
  id: number;
  assign?: string;
  distance?: number;
  operator?: string;
  isReady: boolean;
  fleet?: Fleet;
  idFleet?: number;
}

interface Prodty {
  id: number;
  prodty: number;
  fleet?: Fleet;
  fleetId?: number;
  longTime: number;
  Date: string; // Gunakan tipe tanggal yang sesuai
}

interface Fleet {
  id: number;
  name: string;
  prodtyLoader?: number;
  rate?: number;
  haulers: Hauler[];
  prodtys: Prodty[];
  FleetProblems: FleetProblem[];
  emisiKarbon: EmissiKarbon[];
  matchVectors: MatchVector[];
}

interface MatchVector {
  id: number;
  fleetId?: number;
  fleet?: Fleet;
  MF: number;
  createdAt: string; // Gunakan tipe tanggal yang sesuai
}

interface EmissiKarbon {
  id: number;
  fleetId?: number;
  fleet?: Fleet;
  emisi: number;
  createdAt: string; // Gunakan tipe tanggal yang sesuai
}

interface FleetProblem {
  id: number;
  name: string;
  fleetId?: number;
  fleet?: Fleet;
  longTime: number;
  detail: string;
  createdAt: string; // Gunakan tipe tanggal yang sesuai
}

const ReportBulanan = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [fleets, setFleets] = useState<Fleet[]>([]);
    const [filteredFleets, setFilteredFleets] = useState<Fleet[]>([]);
    
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(event.target.value);
    };
    
    
    
    const handleMonthClick = (value: any) => {
      setSelectedMonth(value);
    };
    
    const handleYearClick = (value: any) => {
      setSelectedYear(value);
    };

    const applyFiltersAndSort = (
      data: Fleet[],
      selectedMonth: string,
      selectedYear: string
    ) => {
      let filteredData = data.map((fleet) => {
        const filterDate = new Date(`${selectedYear}-${selectedMonth}-01T00:00:00.000Z`);
    
        // Apply filters to FleetProblems
        const filteredFleetProblems = fleet.FleetProblems?.filter((problem) => {
          const problemDate = new Date(problem.createdAt);
          return (
            problemDate.getMonth() === filterDate.getMonth() &&
            problemDate.getFullYear() === filterDate.getFullYear()
          );
        });
    
        // Apply filters to EmissiKarbon
        const filteredEmissiKarbon = fleet.emisiKarbon?.filter((emisi) => {
          const emisiDate = new Date(emisi.createdAt);
          return (
            emisiDate.getMonth() === filterDate.getMonth() &&
            emisiDate.getFullYear() === filterDate.getFullYear()
          );
        });
    
        // Apply filters to Prodtys
        const filteredProdtys = fleet.prodtys?.filter((prodty) => {
          const prodtyDate = new Date(prodty.Date);
          return (
            prodtyDate.getMonth() === filterDate.getMonth() &&
            prodtyDate.getFullYear() === filterDate.getFullYear()
          );
        });
    
        // Apply filters to MatchVector
        const filteredMatchVectors = fleet.matchVectors?.filter((matchVector) => {
          const prodtyDate = new Date(matchVector.createdAt);
          return (
            prodtyDate.getMonth() === filterDate.getMonth() &&
            prodtyDate.getFullYear() === filterDate.getFullYear()
          );
        });
    
        return {
          ...fleet,
          FleetProblems: filteredFleetProblems,
          emisiKarbon: filteredEmissiKarbon,
          prodtys: filteredProdtys,
          matchVectors: filteredMatchVectors,
        };
      });
    
      // Filter data berdasarkan keyword pencarian
      if (searchKeyword !== "") {
        filteredData = filteredData.filter((item) =>
          item.name.toLowerCase().includes(searchKeyword.toLowerCase())
        );
      }
    
      return filteredData;
    };
    
    
    
    
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            process.env.NEXT_PUBLIC_WEB_URL + '/api/v1/fleet',
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          ); // Replace with your actual API endpoint
          const data = await response.json();
          console.log("fetched data :", data);
          setFleets(data.fleets);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      
      
      fetchData();
    }, []);
    

    
    const data = applyFiltersAndSort(fleets, selectedMonth, selectedYear);
    console.log("data :", data);
    console.log("selectedMonth :", selectedMonth);
    console.log("selectedYear :", selectedYear);
    const [matchVector, setMatchVector] = useState<number | null>(null);


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
            {data.map((item, index) => (
          <div
            key={index}
            className="bg-white w-[308px] h-[446px] rounded-[10px] shadow-xl overflow-y-scroll pl-4 py-5"
            id="style-2"
          >
            <h1 className="text-neutral-700 text-base font-bold font-['Inter']">
              {item.name}
            </h1>
            <div className="flex flex-col gap-[26px]">
              <div className="flex flex-col gap-4">
                <p className="text-zinc-500 text-base font-medium font-['Inter']">
                  Problems
                </p>
                {/* Assuming FleetProblems is an array on Fleet, you can map through it */}
                {item.FleetProblems.map((fleetProblem, idx) => (
                  <p
                    key={idx}
                    className="text-neutral-700 text-base font-normal font-['Inter']"
                  >
                    {fleetProblem.name}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-zinc-500 text-base font-medium font-['Inter']">
                  Carbon Emission
                </p>
                <p className="text-neutral-700 flex flex-wrap text-base font-normal font-['Inter']">
                  {item.emisiKarbon.reduce(
                    (totalEmisi, emisiKarbon) => totalEmisi + ( emisiKarbon.emisi?? 0),
                    0
                  ) * 30} {/* Assuming distance is in kilometers */}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-zinc-500 text-base font-medium font-['Inter']">
                  Match Vector
                </p>
                <p className="text-neutral-700 text-base font-normal font-['Inter']">
                {/* HEAR MATCHVECTOR PLEASE */}
                  {item.matchVectors[0]?.MF ?? 0}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-zinc-500 text-base flex flex-wrap font-medium font-['Inter']">
                  Goals
                </p>
                <p className="text-neutral-700 text-base font-normal font-['Inter']">
                  Done
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