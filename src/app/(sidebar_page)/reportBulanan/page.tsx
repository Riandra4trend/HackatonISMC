// page.tsx

import ReportBulanan from "./reportBulanan";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { Session } from "next-auth";

const Page = async () => {
  const session = await getServerSession(authOptions) as Session;

  if (!session) redirect("/login");

  
  return(<ReportBulanan />);

};

export default Page;
