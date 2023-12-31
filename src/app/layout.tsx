import type { Metadata } from "next";
import { Lato} from "next/font/google";
const inter = Lato({ subsets: ["latin"], weight: ["400", "700"] });
import ToasterContext from "./context/ToasterContext";
// import "@uploadthing/react/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ecoptimine",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F7F7F7] fixed top-0 left-0 w-screen h-screen`}>
      <ToasterContext />
        <div>{children}</div>
      </body>
    </html>
  );
}
