// page.tsx

import ReportBulanan from "./reportBulanan";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { prisma } from "@/app/lib/prisma";
import { Session } from "next-auth";

const Page = async () => {
  const session = await getServerSession(authOptions) as Session;

  if (!session) redirect("/login");

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/fleet`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );

    const fleet = res;
    console.log(fleet)


  } catch (error) {
    console.error(error);
    
  }

};

export default Page;
