import ReportBulanan from "./reportBulanan";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { prisma } from "@/app/lib/prisma";
import { Session } from "next-auth";
import { Fleet } from "@prisma/client";

const Page = async () => {
    const session = await getServerSession(authOptions) as Session;

    if (!session) redirect("/login");


//   interface Fleet {
//     id: string;
//     name: string;
//     prodtyLoader: number;
//     haulers: {
//       id: string;
//     };
//     prodtys: {
//       prodty: number;
//     };
//     fleetProblems: {
//       problem: string;
//     };
//   }
        interface haulers{
                id: string;
                assign: string;
                distance: number;
        }

        interface prodtys{
                id :string;
                prodty: number;
        }

        interface FleetProblems{
                problemId: string;
                problem: string;
        }
 
    const fleets = await prisma.fleet.findMany({
        select: {
            id: true,
            name: true,
            prodtyLoader: true,
            haulers: {
                select: {
                    id: true,
                },
            },
            prodtys: {
                select: {
                        id :true,
                    prodty: true,
                },
            },
            FleetProblems: {
                select: {
                        problemId: true,
                    problem: true,
                },
            },
        },
    });

    return(
        <ReportBulanan
                fleetId={fleets?.id ?? "-"} // Add fleetId property
                fleetName={name}
                prodtyLoader={prodtyLoader}
                haulers={haulers as haulers[]}
                prodtys={prodtys as prodtys[]}
                FleetProblems={FleetProblems as FleetProblems[]}
        />
    );
};

export default Page;