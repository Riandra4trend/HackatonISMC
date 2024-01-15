import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/app/lib/prisma";

export async function GET() {
    try {
        const fleetProblem = await prisma.fleetProblems.findMany({
            orderBy: {
                id: "asc"
            }
        })

        return NextResponse.json(fleetProblem, {status: 200})
    } catch (error: any) {

        return NextResponse.json(error, {status: 500})
    }
}
