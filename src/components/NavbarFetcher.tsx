import { Session } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/app/lib/prisma";
import { Notification } from "@prisma/client";

interface NavbarFetcherProps {
  children: ({
    user,
  }: {
    user: Session["user"] | null;
    notifications: Notification[];
  }) => JSX.Element;
}

export default async function NavbarFetcher({ children }: NavbarFetcherProps) {
  const session = await getServerSession(authOptions) as Session;

  const user = session?.user as Session["user"];

  const notifications = await prisma.notification.findMany({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: "desc", // Urutkan berdasarkan tanggal pembelian terbaru
    },
  });

  // Pass the user data and notifications data as props to the child components
  return children({ user, notifications });
}
