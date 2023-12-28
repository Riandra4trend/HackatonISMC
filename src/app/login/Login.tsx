"use client";
import Image from "next/image";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
// import { signIn } from "next-auth/react";
// import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });

  const router = useRouter();

//   const handleLogin = async () => {
//     try {
//       const res = await signIn("credentials", {
//         redirect: false,
//         email: data.email,
//         password: data.password,
//         callbackUrl: "/dashboard",
//       });

//       if (res?.error) {
//         toast.error(res.error);
//         throw new Error(res.error);
//       } else {
//         router.push("/dashboard");
//         router.refresh();
//       }
//     } catch (error) {
//       toast.error("Internal Server Error");
//       console.error(error);
//     }
//   };

  return (
    <div className="flex h-screen w-full bg-gradient-to-l from-cyan-100 via-slate-400 to-sky-100 overflow-hidden relative">
      <Image
        src="/login/tone1.svg"
        alt="icon"
        width={2000}
        height={1080}
        className="bg-cover absolute"
        />
      <div className="flex m-auto ">
        <div className="pt-[113px] pb-[124px] px-[120px] bg-white bg-opacity-30 rounded-xl backdrop-blur">
          <h1 className="text-black text-2xl font-bold">Your Logo</h1>
          <h1 className="mt-[9px] text-stone-800 text-[38px] font-bold">
            {" "}
            Login{" "}
          </h1>
          <p className="mt-[26px] text-black text-sm font-normal">Email</p>
          <div className="mt-2 bg-white rounded-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className=" text-black pt-[15.57px] pb-[16.44px] pl-[22px] pr-[300px] rounded-lg"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <p className="mt-[30.56px] text-black text-sm font-normal">
            Password
          </p>
          <div className="flex flex-row items-center mt-2 bg-white rounded-lg border-black">
            <input
              type={showPassword ? "text" : "password"}
              className=" text-black rounded-lg pt-[15.57px] pb-[16.44px] pl-[22px] pr-[300px]"
              placeholder="Enter your password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />

            {showPassword ? (
              <AiOutlineEye
                data-testid="show-password-button"
                className="text-[#737373] text-xl cursor-pointer ml-[450px] absolute"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <AiOutlineEyeInvisible
                data-testid="show-password-button"
                className="text-[#737373] text-xl cursor-pointer ml-[450px] absolute"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <p className="mt-[15.91px] text-stone-800 text-xs font-normal">
            Forgot Password?
          </p>

          <button
            className="block w-full mt-[39.72px] pt-[11.28px] pb-[12.72px] px-[28px] text-center bg-indigo-600 hover:bg-indigo-800 rounded-lg text-white text-xl font-bold"
            // onClick={() => handleLogin()}
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
