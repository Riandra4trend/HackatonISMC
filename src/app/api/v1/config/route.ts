import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { Session } from "next-auth";

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions) as Session;

    if (!session?.user) {
        return NextResponse.json(
          {
            error: "Unauthorized",
          },
          { status: 401 }
        );
      }

  const {
    jumlahFront,
    targetProfit,
    oocLoader,
    oocHauler,
    rate,
    ohda,
    fuelPrice,
    batasEmissi,
    targetProduksi,
    rfuLoader,
    rfuHauler,} = await req.json();

  if (!jumlahFront || !targetProfit || !oocLoader || !oocHauler || !rate || !ohda || !fuelPrice || !batasEmissi || !targetProduksi || !rfuLoader || !rfuHauler) {
    throw new Error("all data are required");
  }

  try {
    
    await prisma.configuration.create({
        data: {
          jumlahFront : jumlahFront,
          targetProfit : targetProfit,
          oocLoader: oocLoader,
          oocHauler: oocHauler,
          rate: rate,
          ohda: ohda,
          fuelPrice: fuelPrice,
          batasEmissi: batasEmissi,
          targetProduksi: targetProduksi,
          rfuLoader: rfuLoader,
          rfuHauler: rfuHauler,
        },
      });

    return NextResponse.json(
      { message: "Config has been created successfully"},
      { status: 201 }
    );
  } catch (error) {
    console.error("Error update config:", error);
    return NextResponse.json({ error: "Error update config" }, { status: 400 });
  }
}

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

      const configuration = await prisma.configuration.findMany({})

      return NextResponse.json(
          { message: "config successfully created", config: configuration},
          { status: 200 }
        );
  
      // Use reduce to group fleets by the total number of problems
  
      // Display fleets grouped by the total number of problems
    } catch (error) {
      console.error('Error:', error);
    }


}