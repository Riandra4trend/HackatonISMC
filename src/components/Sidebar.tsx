"use client";
import React from "react";
import { BiSolidDashboard, BiHistory, BiLogOut } from "react-icons/bi";

import { FaDatabase } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import { signOut } from "next-auth/react";
// import { Session } from "next-auth";

const SidebarDataCustomer = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: BiSolidDashboard,
    color: "bg-blue-500",
  },
  {
    title: "Report",
    path: "/report",
    icon: TbReport,
    color: "bg-yellow-500",
  },
  {
    title: "Database",
    path: "/database",
    icon: FaDatabase,
    color: "bg-red-500",
  },
];

const SidebarDataAdmin = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: BiSolidDashboard,
    color: "bg-blue-500",
  },
  {
    title: "Report",
    path: "/report",
    icon: TbReport,
    color: "bg-yellow-500",
  },
];

const Sidebar = ({ user }: { user: Session["user"] }) => {
  const pathname = usePathname();

  return (
    <div className="z-[99999] hidden lg:flex flex-col bg-gray-100 w-72 fixed h-full">
      <div className="flex flex-col space-y-4 w-60 ml-6">
        <div className="flex justify-center">
          <Image src="/logo.svg" alt="logo" width={350} height={250} />
        </div>
        <div className="font-bold flex px-2 text-gray-700">General</div>

        {user?.role === "CUSTOMER"
          ? SidebarDataCustomer.map((item, index) => (
              <a href={item.path} key={index}>
                <div
                  className={`flex items-center px-4 py-2 rounded-full transition hover:bg-gray-300 ${
                    item.path === pathname ? "bg-gray-300" : "bg-white"
                  }`}
                >
                  <div
                    className={`flex items-center w-10 aspect-square justify-center rounded-full ${item.color} shadow-xl `}
                  >
                    <item.icon className="text-base text-black" />
                  </div>
                  <div className="text-black font-bold ml-4">{item.title}</div>
                </div>
              </a>
            ))
          : SidebarDataAdmin.map((item, index) => (
              <a href={item.path} key={index}>
                <div
                  className={`flex items-center px-4 py-2 rounded-full transition hover:bg-gray-300 ${
                    item.path === pathname ? "bg-gray-300" : "bg-white"
                  }`}
                >
                  <div
                    className={`flex items-center w-10 aspect-square justify-center rounded-full ${item.color} shadow-xl `}
                  >
                    <item.icon className="text-base text-black" />
                  </div>
                  <div className="text-black font-bold ml-4">{item.title}</div>
                </div>
              </a>
            ))}
      </div>

      <div className="mt-48">
        <div
          className="flex items-center px-6 py-4 rounded-full transition bg-red-600 hover:bg-red-800 w-60 ml-6 cursor-pointer"
          onClick={() => signOut()}
        >
          <BiLogOut className="text-xl text-black" />
          <div className="text-white font-bold ml-2 curs">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
