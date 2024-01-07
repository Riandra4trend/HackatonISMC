import Sidebar from "../../components/Sidebar";
// import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import NavbarFetcher from "@/components/NavbarFetcher";
import SidebarFetcher from "@/components/SidebarFetcher";
import { Session } from "next-auth";
// import { Notification } from "@prisma/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Provider>
        <SidebarFetcher>
          {({ user }) => (
            <Sidebar
              user={user as Session["user"]}
            />
          )}
        </SidebarFetcher>
        
        <div className="lg:pl-[280px]">{children}</div>
      </Provider>
    </>
  );
}
