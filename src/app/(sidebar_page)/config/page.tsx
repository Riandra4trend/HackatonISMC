import Config from "./Config";
// import Register from "@/app/register/Register";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { prisma } from "@/app/lib/prisma";
import { Session } from "next-auth";

const page = () => {
   
    return(<Config />);
};

export default page;