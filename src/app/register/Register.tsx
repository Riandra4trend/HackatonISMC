"use client";
import Image from "next/image";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
// import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    username: "",
    phone_number: "",
    password: "",
  });
  const router = useRouter();

  // const handleRegister = async () => {
  //   if (!data.email || !data.username || !data.phone_number || !data.password) {
  //     toast.error("Please fill in all fields");
  //     return;
  //   }
    
  //   try {
  //     const res = await fetch(
  //       process.env.NEXT_PUBLIC_WEB_URL + "/api/v1/users",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: data.email,
  //           username: data.username,
  //           phoneNumber: data.phone_number,
  //           password: data.password,
  //         }),
  //       }
  //     );

  //     if (res?.ok) {
  //       toast.success("Register Success.");
  //       await signIn("credentials", {
  //         email: data.email,
  //         password: data.password,
  //         callbackUrl: "/dashboard",
  //       });
  //       router.push("/dashboard");
  //     } else {
  //       toast.error("Error Registering.");
  //       throw new Error("Error Registering.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Error Registering Account");
  //   }
  // };

  return (
    <div className="flex min-h-screen h-full w-full bg-gradient-to-l from-cyan-100 via-slate-400 to-sky-100 overflow-hidden fixed top-0 left-0 bg-cover" style={{backgroundImage: `url('/landing/tone1.svg')`}}>
      <div className="flex m-auto w-full justify-center align-center">
        <div className="w-1/2 min-w-[30rem] pt-[60px] pb-[60px] px-[120px] bg-white bg-opacity-30 rounded-xl backdrop-blur">
          <div className="flex justify-between ">

            <h1 className="mt-[12px] text-stone-800 text-[38px] font-bold">
              {" "}
              Register{" "}
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
              className="w-full text-black pt-[15.57px] pb-[16.44px] pl-[22px] rounded-lg focus:ring-0 focus:outline-none"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <p className="mt-[17.5px] text-black text-sm font-normal">Username</p>
          <div className="mt-2 bg-white rounded-lg">
            <input
              type="username"
              placeholder="Enter your username"
              className="w-full text-black pt-[15.57px] pb-[16.44px] pl-[22px] rounded-lg focus:ring-0 focus:outline-none"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>

          <p className="mt-[17.5px] text-black text-sm font-normal">
            Phone Number
          </p>
          <div className="mt-2 bg-white rounded-lg">
            <input
              type="phone_number"
              placeholder="Enter your phone number"
              className="w-full text-black pt-[15.57px] pb-[16.44px] pl-[22px] rounded-lg focus:ring-0 focus:outline-none"
              onChange={(e) =>
                setData({ ...data, phone_number: e.target.value })
              }
            />
          </div>

          <p className="mt-[17.5px] text-black text-sm font-normal">Password</p>
          <div className="flex flex-row items-center mt-2 bg-white rounded-lg border-black justify-betweens pr-3">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full text-black rounded-lg pt-[15.57px] pb-[16.44px] pl-[22px] focus:ring-0 focus:outline-none"
              placeholder="Enter your password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />

            {showPassword ? (
              <AiOutlineEye
                className="text-[#737373] text-xl cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="text-[#737373] text-xl cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <button
            className="block w-full mt-[39.72px] pt-[11.28px] pb-[12.72px] px-[28px] text-center bg-indigo-600 hover:bg-indigo-800 rounded-lg text-white text-xl font-bold"
            // onClick={handleRegister}
          >
            Register Now
          </button>

          <p className="mt-[45.28px] text-center text-stone-800 text-sm font-normal ">
            Already have an account?{" "}
            <span
              className="text-stone-800 text-sm font-semibold cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login Here
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
