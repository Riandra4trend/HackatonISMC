import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
) {
  const { oldUsername,newUsername } = await req.json();

  try {
    const user = await prisma.user.findUnique({
      where: { username: newUsername },
    });

    if (user) {
      return NextResponse.json({ error: "Username Already Used" }, { status: 501 });
    }

    await prisma.user.update({
      where: { username: oldUsername },
      data: {
        username: newUsername,
      },
    });

    return NextResponse.json(
      { message: "User successfully updated" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Error updating user" }, { status: 500 });
  }
}
