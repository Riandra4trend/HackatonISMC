import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";

// ...
export async function GET(req: NextRequest) {

  try {


    const Loader = await prisma.fleet.findMany({
    })

    const Hauler = await prisma.hauler.findMany({      
      include:{
        fleet:true
    }})

    return NextResponse.json(
      { message: "Success", Loader: Loader, Hauler: Hauler },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error :", error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}

export async function PATCH(req:NextRequest){
  try {
    const {fleetid , haulerid} = await req.json()
    
    const upadateHauler = await prisma.hauler.update({
      where:{
        id:haulerid
      },
      data:{
        idFleet:fleetid,
      }

    })
    return NextResponse.json(
      { message: "Success"},
      { status: 200 }
    );
  } catch (error) {
    console.error("Error :", error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
// ...