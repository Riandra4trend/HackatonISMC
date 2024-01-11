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

  
}

// ...