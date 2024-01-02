"use client";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { FaCar } from "react-icons/fa";
import { GrDocumentConfig } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiArrowDownSLine } from "react-icons/ri";
// import { signOut } from "next-auth/react";
// import { Session } from "next-auth";

const SidebarDataCustomer = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: RxDashboard,
  },
  {
    title: "Vehicle",
    path: "/vehicle",
    icon: FaCar,
  },
  {
    title: "Report",
    path: "/report",
    icon: TbReport,
  },
  {
    title: "Config",
    path: "/config",
    icon: GrDocumentConfig,
  },
];

const SidebarDataAdmin = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: RxDashboard,
  },
  {
    title: "Report",
    path: "/report",
    icon: TbReport,
  },
];

// ... (imports dan kode lainnya)

const Config = () => {
  const pathname = usePathname();

  return (
    <div className="z-[99999] hidden lg:flex flex-col bg-white w-64 relative h-full">
      <div className="flex flex-col">
        <div className="flex justify-center mt-[42px]">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </div>
        <div className="mx-[25px] mt-[42px] relative">
          {SidebarDataCustomer.map((item, index) => (
            <a href={item.path} key={index}>
              <div
                className={`flex items-center px-7 py-[15px] my-[5px] rounded-r-full transition hover:bg-[#A2CC82] relative ${
                  (item.path === pathname || `${item.path}Bulanan` === pathname || `${item.path}Analysis` === pathname) ? "bg-[#A2CC82]" : "bg-white"
                }`}                
              >
                { (item.path === pathname || `${item.path}Analysis` === pathname || `${item.path}Bulanan` === pathname) && (
                  <div className="bg-black px-2 h-full absolute -ml-7"></div>
                )}

                <div className={`flex items-center w-6 aspect-square justify-center`}>
                  <item.icon className={`text-base ${
                  (item.path === pathname || `${item.path}Bulanan` === pathname || `${item.path}Analysis` === pathname) ? "text-black" : "text-[#818181]"}`}/>
                </div>
                <div
                  className={`ml-5 font-extrabold text-sm font-['Open Sans'] ${
                    (item.path === pathname || `${item.path}Bulanan` === pathname || `${item.path}Analysis` === pathname) ? "text-black" : "text-[#818181]"
                  }`}
                >
                  {item.title}
                </div>
                {item.title === "Report" && (
                  <RiArrowDownSLine className={`ml-7 w-8 ${item.path === pathname ? "text-black" : "text-[#818181]"}`}/>
                )}
              </div>
              {item.path === "/report" &&  pathname === "/report" &&(
                <>
                  <a href="/reportBulanan">
                    <div className="flex items-center px-7 py-[15px] my-[5px] rounded-r-full">
                      <div
                        className="ml-5 font-extrabold text-sm font-['Open Sans'] text-[#818181]"
                      >
                        Report Bulanan
                      </div>
                    </div>
                  </a>
                  <a href="/reportAnalysis">
                    <div className="flex items-center px-7 py-[15px] my-[5px] rounded-r-full">
                    <div
                        className="ml-5 font-extrabold text-sm font-['Open Sans'] text-[#818181]"
                      >
                      
                        Report Analysis
                      </div>
                    </div>
                  </a>
                </>
              )}
              {item.path === "/report" && pathname === "/reportBulanan" &&(
                <>
                  <a href="/reportBulanan">
                    <div className="flex items-center px-7 py-[15px] my-[5px] rounded-r-full">
                      <div
                        className="ml-5 font-extrabold text-sm font-['Open Sans'] text-[#A2CC82]"
                      >
                        Report Bulanan
                      </div>
                    </div>
                  </a>
                  <a href="/reportAnalysis">
                    <div className="flex items-center px-7 py-[15px] my-[5px] rounded-r-full">
                    <div
                        className="ml-5 font-extrabold text-sm font-['Open Sans'] text-[#818181]"
                      >    
                        Report Analysis
                      </div>
                    </div>
                  </a>
                </>
              )}
              {item.path === "/report" && pathname === "/reportAnalysis" &&(
                <>
                  <a href="/reportBulanan">
                    <div className="flex items-center px-7 py-[15px] my-[5px] rounded-r-full">
                      <div
                        className="ml-5 font-extrabold text-sm font-['Open Sans'] text-[#818181]"
                      >
                        Report Bulanan
                      </div>
                    </div>
                  </a>
                  <a href="/reportAnalysis">
                    <div className="flex items-center px-7 py-[15px] my-[5px] rounded-r-full">
                    <div
                        className="ml-5 font-extrabold text-sm font-['Open Sans'] text-[#A2CC82]"
                      >
                        Report Analysis
                      </div>
                    </div>
                  </a>
                </>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-20 border-b border-[#818181] w-64"></div> 
      <div className="mt-20">
        <div
          className="flex px-7 mx-7 py-[10px] rounded-full transition bg-[#818181] hover:bg-zinc-700 cursor-pointer"
          // onClick={() => signOut()}
        >
          <BiLogOut className="text-xl text-white" />
          <div className="text-white font-bold ml-5 curs">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Config;
