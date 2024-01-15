import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { Session } from "next-auth";

// ...
export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions) as Session;

    if (!session?.user) {
        return NextResponse.json(
          {
            error: "Unauthorized",
          },
          { status: 401 }
        );
      }

      try {
        const fleets = await prisma.fleet.findMany({
          include: {
            FleetProblems: true,
            prodtys: true,
            haulers: true,
            emisiKarbon: true,
            matchVectors: true,
          },
        });

        return NextResponse.json(
            { message: "User successfully created", fleets: fleets},
            { status: 200 }
          );
    
        // Use reduce to group fleets by the total number of problems
    
        // Display fleets grouped by the total number of problems
      } catch (error) {
        console.error('Error:', error);
      }

  
}

// ...