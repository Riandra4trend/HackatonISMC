import Sidebar from "../../components/Sidebar";
import Provider from "@/components/Provider";
import SidebarFetcher from "@/components/SidebarFetcher";
import { Session } from "next-auth";
// import Navbar from "@/components/Navbar";
// import NavbarFetcher from "@/components/NavbarFetcher";
// import { Notification } from "@prisma/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row max-h-screen w-full h-full">
      <Provider>
        <SidebarFetcher>
          {({ user }) => (
            <Sidebar
              user={user as Session["user"]}
            />
          )}
        </SidebarFetcher> 
        {children}
      </Provider>
    </div>
  );
}
