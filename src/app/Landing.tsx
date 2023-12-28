"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-r px-12 py-28 flex flex-col justify-center gap-8">
        <Image
            src="/landing/tone1.svg"
            alt="icon"
            width={2000}
            height={1080}
            className="bg-cover absolute inset-0 -z-10"
            />
      <div className="flex  flex-col gap-4 text-center lg:text-left">
        <h2 className="font-bold text-4xl lg:text-7xl">Welcome to</h2>
        <h2 className="font-bold text-4xl lg:text-7xl">
          <span className="text-[#A3CC81]">eco</span><span className="text-[#5D7853]">pti</span><span className="text-black">mine</span>
        </h2>
        <h3 className="text-slate-500 text-lg lg:text-3xl">
            Solution of eco fleet management system!
        </h3>
      

      <div className="w-full lg:w-[40rem] lg:bg-white lg:rounded-full lg:shadow-2xl flex flex-col lg:flex-row items-center lg:justify-between px-8 py-3">
        <p className="text-slate-500 font-bold text-center">ecoptimine</p>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-[#562F5E] rounded-full">
            <div
              className="flex flex-row items-center px-3 py-2 cursor-pointer select-none"
              onClick={() => router.push("/register")}
              >
              <Image
                className="mr-12"
                src="/landing/icon_user.svg"
                alt="icon-user"
                width={20}
                height={100}
                />
              <p className="text-white pr-14 pt-0.5">Register</p>
            </div>
          </div>

          <div className="bg-[#EF9500] rounded-full">
            <div
              className="flex flex-row items-center px-3 py-2 cursor-pointer select-none"
              onClick={() => router.push("/login")}
              >
              <Image
                className="mr-12"
                src="/landing/icon_login.svg"
                alt="icon-user"
                width={20}
                height={100}
                />
              <p className="text-white pr-14">Login</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
