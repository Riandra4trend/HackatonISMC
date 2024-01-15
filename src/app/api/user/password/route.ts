import { prisma } from "@/app/lib/prisma";
import { compare, hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
) {
  const { id,oldPassword,newPassword } = await req.json();

  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    if(user){
        const isPasswordValid = await compare(oldPassword, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }
    }


    await prisma.user.update({
      where: { id: id },
      data: {
        password:await hash(newPassword, 10),
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
