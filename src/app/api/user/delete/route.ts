import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
) {
  const { userId } = await req.json();
  console.log(userId);
  try {
    await prisma.user.delete({
      where: { id: userId},
    });

    return NextResponse.json(
      { message: "User successfully deleted" },
      { status: 200 }
    );
  } catch (error:any) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
