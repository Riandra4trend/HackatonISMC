import Sidebar from "../../components/Sidebar";
import Navbar from "@/components/Navbar";
// import Provider from "@/components/Provider";
import NavbarFetcher from "@/components/NavbarFetcher";
// import SidebarFetcher from "@/components/SidebarFetcher";
// import { Session } from "next-auth";
// import { Notification } from "@prisma/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row max-h-screen w-full h-full">
             
        <Sidebar/>
        {children}
      
    </div>
  );
}
