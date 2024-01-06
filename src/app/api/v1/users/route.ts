import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";

// ...
export async function POST(req: NextRequest) {
  const { email, username, password } = await req.json();

  if (!email || !username || !password) {
    throw new Error("Email, username, and password are required");
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      throw new Error(`User with email of ${user.email} already exists`);
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: await hash(password, 10),
        role: "OPERATIONAL", // Perubahan: Ganti ke role
      },
    });

    return NextResponse.json(
      { message: "User successfully created", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}

// ...
