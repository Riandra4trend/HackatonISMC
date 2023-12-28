// import { Session } from "next-auth";
// import { authOptions } from "../app/api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth/next";

// interface SidebarFetcherProps {
//   children: ({
//     user,
//   }: {
//     user: Session["user"] | null;
//   }) => JSX.Element;
// }

// export default async function NavbarFetcher({ children }: SidebarFetcherProps) {
//   const session = await getServerSession(authOptions) as Session;

//   const user = session?.user as Session["user"];

//   // Pass the user data and notifications data as props to the child components
//   return children({ user });
// }
