import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "../../../lib/prisma";

interface Credentials {
  email: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials as Credentials;

          if (!email || !password) {
            throw new Error("Email and password are required");
          }

          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!user) {
            throw new Error("User not found");
          }

          if (user.role !== "MANAGER" && user.role !== "OPERATIONAL") {
            throw new Error("You are not authorized to access this page");
          }

          const isPasswordValid = await compare(password, user.password);

          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

          return user;
        } catch (error) {
          throw new Error(`Authentication failed: ${error}`);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user && user.id) {
        token.uid = user.id as string;

        const userData = await prisma.user.findUnique({
          where: {
            id: user.id,
          },
          select: {
            role: true,
          },
        });

        token.role = userData?.role;
      }

      return token;
    },
    session: async ({ session, token }) => {
      const userData = await prisma.user.findUnique({
        where: {
          id: token.uid as string,
        },
        select: {
          id : true,
          email: true,
          username: true,
          password: true,
          role: true,
        },
      });

      if (token?.uid && userData) {
        session.user = userData;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };



