import Config from "./Config";
// import Register from "@/app/register/Register";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { prisma } from "@/app/lib/prisma";
import { Session } from "next-auth";
import { Configuration } from "@prisma/client";

const page = async () => {
    const session = await getServerSession(authOptions) as Session;
  
    if (!session) redirect("/login");

    const config = await prisma.configuration.findMany({
        select: {
            jumlahFront : true,
            targetProfit: true,
            oocLoader: true,
            oocHauler: true,
            rate: true,
            ohda: true,
            fuelPrice: true,
            batasEmissi: true,
            targetProduksi: true,
            rfuLoader: true,
            rfuHauler: true,
        },
        orderBy: {
          createdAt: "desc",
        }
      });
    return(
    <>
        <Config
            config ={config as Configuration[]}
        />
    </>
    
    );
};

export default page;