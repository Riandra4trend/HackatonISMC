// const calculateTotalProblems = fleets.reduce((total, fleet) => total + fleet.FleetProblems.length, 0); {
  // Menggunakan reduce untuk menjumlahkan total masalah dari seluruh armada
  
// };


// const totalFleets = fleets.length;
// const averageProblemsPerFleet = calculateTotalProblems / totalFleets;

// const findFleetWithHighestProblems = (fleets: Fleet[]) => {
//   if (fleets.length === 0) return null;

//   return fleets.reduce((maxFleet, currentFleet) => {
//     return currentFleet.FleetProblems.length > maxFleet.FleetProblems.length ? currentFleet : maxFleet;
//   }, fleets[0]);
// };

// // Function to find the common problems from all fleets
// const findCommonProblemsFromAllFleets = (fleets: Fleet[]): Problem[] => {
//   if (fleets.length === 0) return [];

//   const allProblems = fleets.reduce((problems, fleet) => {
//     return problems.concat(fleet.FleetProblems.map((fleetProblem) => fleetProblem.problem));
//   }, [] as Problem[]);

//   // Filter out duplicates
//   const uniqueProblems = allProblems.filter((problem, index, self) => {
//     return index === self.findIndex((p) => p.id === problem.id);
//   });

//   return uniqueProblems;
// };

// ... (kode sebelumnya)

// Get the fleet with the highest number of problems
// const fleetWithHighestProblems = findFleetWithHighestProblems(fleets);

// // Get the common problems from all fleets
// const commonProblems = findCommonProblemsFromAllFleets(fleets);

"use client";
import React from 'react';
import { FaBell } from 'react-icons/fa';
import { BsMinecartLoaded } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useEffect } from "react";
import { useState } from "react";
import { TbBuildingFactory } from "react-icons/tb";

const grafik = [
    {
        bulan : "Jan",
        emisi : "100",
    },
    {
        bulan : "Feb",
        emisi : "300",
    },
    {
        bulan : "Maret",
        emisi : "200",
    },
    {
        bulan : "April",
        emisi : "400",
    },
    {
        bulan : "May",
        emisi : "600",
    },
    {
        bulan : "June",
        emisi : "400",
    },
    {
        bulan : "July",
        emisi : "700",
    },
    {
        bulan : "August",
        emisi : "300"
    },{
        bulan : "Sept",
        emisi : "100",
    },
    {
        bulan : "Oct",
        emisi : "300",
    },
    {
        bulan : "Nov",
        emisi : "200",
    },
    {
        bulan : "Dec",
        emisi : "300",
    },
]

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

interface Configuration {
  id: number;
  jumlahFront: number;
  targetProfit: number;
  oocLoader: number;
  oocHauler: number;
  rate: number;
  ohda: number;
  fuelPrice: number;
  batasEmissi: number;
  targetProduksi: number;
  rfuLoader: number;
  rfuHauler: number;
  createdAt: string; // Use the appropriate date type
}


const reportAnalysis = ({config} : {config: Configuration[]}) => {
    
    const [fleets, setFleets] = useState<Fleet[]>([]);

    
    
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
      
  
    const calculateTotalEmissionPerMonth = (fleets: Fleet[]): { [month: string]: number } => {
      const totalEmissionPerMonth: { [month: string]: number } = {};
    
      fleets.forEach((fleet) => {
        fleet.emisiKarbon?.forEach((emission) => {
          const month = new Date(emission.createdAt).toLocaleDateString('en-US', { month: 'short' });
          totalEmissionPerMonth[month] = (totalEmissionPerMonth[month] || 0) + emission.emisi;
        });
      });
    
      return totalEmissionPerMonth;
    };
    const totalEmissionPerMonth = calculateTotalEmissionPerMonth(fleets);
    const grafik = Object.entries(totalEmissionPerMonth).map(([bulan, emisi]) => ({
      bulan,
      emisi: emisi.toString(),
    }));
        

    
    
    console.log(fleets.length)
    console.log(config[0].jumlahFront)
    const jumlahFront = config[0].jumlahFront;
      // Fungsi untuk menghitung jumlah total seluruh problem dari seluruh fleet
      const calculateTotalProblems = (fleets: Fleet[]): number => {
        return fleets&&fleets.reduce((total, fleet) => {
          // Pastikan properti FleetProblems ada sebelum mengakses length
          const fleetProblems = fleet.FleetProblems ? fleet.FleetProblems : [];
          return total + fleetProblems.length;
        }, 0);
      };
      

// Fungsi untuk menghitung rata-rata masalah setiap fleet
// Periksa keberadaan matchVectors sebelum menggunakan reduce
const calculateAverageProblemsPerFleet = (fleets: Fleet[]): number => {
  const totalProblems = calculateTotalProblems(fleets);
  const totalFleets = fleets.length;
  return totalFleets > 0 ? totalProblems / totalFleets : 0; // Perbaikan
};

const calculateMatchVectorsUnder09 = (fleets: Fleet[]): number => {
  return fleets&&fleets.reduce((total, fleet) => {
    // Periksa keberadaan matchVectors sebelum menggunakan filter
    const vectorsUnder09 = fleet.matchVectors ? fleet.matchVectors.filter((vector) => vector.MF < 0.9) : [];
    return total + vectorsUnder09.length;
  }, 0);
};



const calculateMatchVectorsAroundOne = (fleets: Fleet[]): number => {
  return fleets&&fleets.reduce((total, fleet) => {
    // Periksa keberadaan matchVectors sebelum menggunakan filter
    const vectorsAroundOne = fleet.matchVectors ? fleet.matchVectors.filter((vector) => vector.MF >= 0.9 && vector.MF <= 1.1) : [];
    return total + vectorsAroundOne.length;
  }, 0);
};

const calculateMatchVectorsOver1 = (fleets: Fleet[]): number => {
  return fleets&&fleets.reduce((total, fleet) => {
    // Periksa keberadaan matchVectors sebelum menggunakan filter
    const vectorsOver1 = fleet.matchVectors ? fleet.matchVectors.filter((vector) => vector.MF > 1) : [];
    return total + vectorsOver1.length;
  }, 0);
};

// Fungsi untuk menghitung total profit
const calculateTotalProfit = (fleets: Fleet[], config: Configuration[]): number => {
  return fleets.reduce((total, fleet) => {
    // Pastikan properti prodtys dan rate ada sebelum mengakses
    const prodtys = fleet.prodtys ? fleet.prodtys : [];
    const rate = fleet.rate ? fleet.rate : 0;
    
    // Hitung total prodty dikali rate
    const totalProdty = prodtys.reduce((sum, prodty) => sum + prodty.prodty, 0);

    // Kalikan totalProdty dengan rate
    const profitFromFleet = totalProdty * rate;
    
    return total + profitFromFleet;
  }, 0) * 30; // Kalikan dengan 30
};


// Fungsi untuk menghitung persentase emisi karbon
const calculateEmissionPercentage = (fleets: Fleet[], config: Configuration[]): number => {
  const totalEmission = fleets.reduce((total, fleet) => {
    // Pastikan properti emisiKarbon ada sebelum mengakses
    const emissions = fleet.emisiKarbon ? fleet.emisiKarbon : [];
    
    // Hitung total emisi karbon
    const totalEmissionPerFleet = emissions.reduce((sum, emission) => sum + emission.emisi, 0);
    
    return total + totalEmissionPerFleet;
  }, 0);

  const totalEmissionLimit = config.reduce((total, cfg) => total + cfg.batasEmissi, 0);

  // Hitung persentase emisi karbon
  const emissionPercentage = (totalEmission / totalEmissionLimit / fleets.length);
  
  return emissionPercentage;
};

// Panggil fungsi-fungsi tersebut di dalam komponen reportAnalysis
const totalProfit = calculateTotalProfit(fleets, config);
const emissionPercentage = calculateEmissionPercentage(fleets, config) * 100 + "%";


const Emisi = config[0].batasEmissi
const totalProblems = calculateTotalProblems(fleets);
const averageProblemsPerFleet = calculateAverageProblemsPerFleet(fleets);
const matchVectorsUnder09 = calculateMatchVectorsUnder09(fleets);
const matchVectorsAroundOne = calculateMatchVectorsAroundOne(fleets);
const matchVectorsOver1 = calculateMatchVectorsOver1(fleets);
const matchVectorSalah = matchVectorsOver1+matchVectorsUnder09;
console.log("batasEmisi",config[0].batasEmissi)
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
                        <div className="px-8 py-2">
                            <h1 className="w-[222px] text-neutral-700 text-2xl font-semibold font-['Open Sans'] leading-loose">Profit</h1>
                            <div className="flex flex-row gap-7">
                                <FaDollarSign className="text-black text-5xl"></FaDollarSign>
                                <div className="flex flex-col gap-[5px]">
                                    <h1 className="text-black text-4xl font-bold">Rp {totalProfit}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[177px] bg-white rounded-[16px]">
                        <div className="px-8 py-2">
                            <h1 className="w-[222px] text-neutral-700 text-2xl font-semibold font-['Open Sans'] leading-loose">Emission Percentage</h1>
                            <div className="flex flex-row gap-10">
                                <TbBuildingFactory className="text-black text-5xl"></TbBuildingFactory>
                                <div className="flex flex-col gap-[5px]">
                                    <h1 className="text-black text-4xl font-bold">{emissionPercentage}</h1>
                                    <p className="text-slate-500 text-sm font-bold font-['Inter']">Percentage of Emission limits</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* kotak grafik */}
                <div className="w-full h-[370px] bg-white rounded-[16px] py-7 pl-7 flex flex-col overflow-y-scroll" id="style-2">
                    <h1 className="w-[463px] text-neutral-700 text-2xl font-semibold font-['Open Sans'] leading-loose">Carbon Emission Per Month Graph All</h1>
                    {/* taruh grafik disini */}

                    <LineChart width={1100} height={250} data={grafik}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bulan" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="emisi" stroke="#8884d8" />
                    </LineChart>
                    <div className="flex items-baseline"> {/* Use flex and items-baseline */}
                        <p className="w-[162px] h-8 text-neutral-700 text-lg font-bold font-['Inter'] leading-7 inline-block">Recommendation :</p>
                        <span className="w-[487px] text-neutral-700 text-sm font-medium font-['Inter'] leading-7 inline-block">
                            ini hasil rekomendasi, rumusnya bisa kategorisasiin jadi beberapa bagian
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[472px] bg-white rounded-[16px]">
                <div className='px-8 pt-7'>
                    <h1 className="text-neutral-700 text-2xl font-semibold font-['Open Sans'] leading-loose">Productivity Recommendation</h1>
                    <div className='flex flex-row gap-4 justify-between'>
                        <div className='py-4 px-6 w-1/3 bg-white shadow-xl rounded-[20px]'>
                            <div className="text-neutral-700 text-base font-bold font-['Inter']">Problems</div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4"><span className='font-bold'>Total :</span> {totalProblems}</div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4"><span className='font-bold'>Average per fleet :</span> {averageProblemsPerFleet}</div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4"><span className='font-bold'>Highest problems from fleet :</span> </div>
                        </div>
                        <div className='py-4 px-6 w-1/3 bg-white shadow-xl rounded-[20px]'>
                            <div className="text-neutral-700 text-base font-bold font-['Inter']">Match Factor</div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4"><span className='font-bold'>Above One :</span> {matchVectorsUnder09}</div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4"><span className='font-bold'>Around One :</span>{matchVectorsAroundOne} </div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4"><span className='font-bold'>Under One :</span>{matchVectorsOver1}</div>
                            
                        </div>
                        <div className='py-4 px-6 w-1/3 bg-white shadow-xl rounded-[20px]'>
                            <div className="text-neutral-700 text-base font-bold font-['Inter']">GOALS</div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4">Terdapat <span className='font-bold'>{totalProblems}</span> yang harus diperbaiki</div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4">Terdapat <span className='font-bold'>{matchVectorSalah}</span> yang harus disesuaikan agar mendekati 1</div>
                            <div className="text-zinc-500 text-base font-medium font-['Inter'] mt-4">Persentasi Emissi Carbon yaitu <span className='font-bold'>{emissionPercentage}</span> melebih batas emissi yang telah ditetapkan perlu diperhatikan kembali</div>
                        </div>
                        
                    </div>
                    <div className='h-[98px] w-full mt-4 px-5 py-5 rounded-[20px] flex flex-col gap-3 bg-white shadow-xl'>
                        <p className="w-[697px] text-neutral-700 text-base font-bold font-['Inter']">Recommendation</p>
                        <div><span className="text-neutral-700 text-base font-medium font-['Inter']">Berikut hal yang perlu diperhatikan dan diperbaiki lebih lanjut, terdapat </span><span className="text-neutral-700 text-base font-bold font-['Inter']"> {totalProblems} Problem yang perlu diperbaiki dan {matchVectorSalah} match factor yang harus disesuaikan</span></div>
                    </div>
                </div>
            </div>
        </div>
    )}
    
export default reportAnalysis