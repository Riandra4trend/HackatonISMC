"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-gradient-to-r px-12 py-28 flex flex-col justify-center gap-8 bg-cover fixed top-0 left-0" style={{backgroundImage: `url('/landing/tone1.svg')`}}>
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h2 className="font-bold text-white text-4xl lg:text-7xl">Welcome to</h2>
        <h2 className="font-bold text-4xl lg:text-7xl">
          <span className="text-[#A3CC81]">eco</span><span className="text-[#5D7853]">pti</span><span className="text-[#EF9500]">mine</span>
        </h2>
        <h3 className="text-slate-500 text-lg lg:text-3xl">
            Solution of eco fleet management system!
        </h3>
      

      <div className="w-full lg:w-fit lg:bg-white lg:rounded-full lg:shadow-2xl flex flex-col lg:flex-row items-center px-5 py-2 lg:justify-evenly">
        <div className="font-bold text-center bg-white rounded-full bg-transparent w-fit mr-2">      
            <Image
                className="bg-white rounded-[16px] mb-2 pb-1 lg:pb-0"
                src="/logo.svg"
                alt="icon-user"
                width={60}
                height={60}
                /></div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-[#EF9500] rounded-full">
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

          <div className="bg-[#5AE4A7] rounded-full">
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
