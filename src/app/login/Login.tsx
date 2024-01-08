"use client";
import Image from "next/image";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: "/dashboard",
      });

      if (res?.error) {
        toast.error(res.error);
        throw new Error(res.error);
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      toast.error("Internal Server Error");
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-l from-cyan-100 via-slate-400 to-sky-100 overflow-hidden fixed top-0 left-0 bg-cover" style={{backgroundImage: `url('/landing/tone1.svg')`}}>
      <div className="flex m-auto w-full justify-center align-center">
        <div className="w-1/2 min-w-[30rem] pt-[113px] pb-[124px] px-[100px] bg-white bg-opacity-30 rounded-xl backdrop-blur">
          <div className="flex justify-between">

            <h1 className="mt-[12px] text-stone-800 text-[38px] font-bold">
              {"  "}
              Login{" "}
            </h1>
            <Image
                    className=""
                    src="/logo.svg"
                    alt="icon-user"
                    width={100}
                    height={100}
                    />
          </div>
          <p className="mt-[10px] text-black text-sm font-normal">Email</p>
          <div className="mt-2 bg-white rounded-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-black pt-[15.57px] pb-[16.44px] px-[22px] rounded-lg focus:ring-0 focus:outline-none"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <p className="mt-[30.56px] text-black text-sm font-normal">
            Password
          </p>
          <div className="flex flex-row items-center mt-2 bg-white rounded-lg border-black justify-between pr-3">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full text-black rounded-lg pt-[15.57px] pb-[16.44px] pl-[22px] focus:ring-0 focus:outline-none"
              placeholder="Enter your password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />

            {showPassword ? (
              <AiOutlineEye
                data-testid="show-password-button"
                className="text-[#737373] text-xl cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <AiOutlineEyeInvisible
                data-testid="show-password-button"
                className="text-[#737373] text-xl cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <p className="mt-[15.91px] text-stone-800 text-xs font-normal">
            Forgot Password?
          </p>

          <button
            className="block w-full mt-[39.72px] pt-[11.28px] pb-[12.72px] px-[28px] text-center bg-indigo-600 hover:bg-indigo-800 rounded-lg text-white text-xl font-bold"
            onClick={() => handleLogin()}
          >
            Sign in
          </button>

          <p className="mt-[45.28px] text-center text-stone-800 text-sm font-normal ">
            Don{"'"}t have an account yet?{" "}
            <span
              className="text-stone-800 text-sm font-semibold cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Register Here
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
