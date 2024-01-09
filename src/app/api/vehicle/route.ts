import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";

// ...
export async function GET(req: NextRequest) {

  try {


    const Loader = await prisma.loader.findMany({})

    const Hauler = await prisma.hauler.findMany({})

    return NextResponse.json(
      { message: "User successfully created", Loader: Loader, Hauler: Hauler },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error :", error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}

// ...