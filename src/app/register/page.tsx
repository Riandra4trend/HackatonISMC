import Register from "./Register";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { Session } from "next-auth";
// import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

// const page = async () => {
//   const session = await getServerSession(authOptions) as Session;

//   if (session) return redirect("/dashboard");
//   return <Register />;
// };

const page = () => <Register />;

export default page;
