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

  const {jumlahFront,
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
          rfuHauler,
        },
      });

    return NextResponse.json(
      { message: "Config has been updated"},
      { status: 201 }
    );
  } catch (error) {
    console.error("Error update config:", error);
    return NextResponse.json({ error: "Error update config" }, { status: 400 });
  }
}
