import Dashboard from "./Dashboard";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { prisma } from "@/app/lib/prisma";
import { Session } from "next-auth";

const page = async () => {
    const session = await getServerSession(authOptions) as Session;
  
    if (!session) redirect("/login");
    return(
        <Dashboard />
    );
};

export default page;;