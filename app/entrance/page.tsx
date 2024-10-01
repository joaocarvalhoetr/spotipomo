"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col justify-between items-center w-full min-h-screen pl-10 pr-10">
      <div className="flex flex-col mt-20 justify-center items-center text-black w-min gap-8">
        <p className="text-white text-[64px] flex justify-center items-center">
          {" "}
          <span className="text-[#1ed760]">Spoti</span>Pomo
        </p>
        <div className=" relative bg-white w-full h-[40.49px] flex justify-between items-center text-black text-2xl font-normal leading-[39.01px] rounded-[53px]">
          <div className="absolute w-full top-0 left-0 h-full">
            <div
              className={`absolute w-1/2 bg-[#1ed760] h-full rounded-[53px] ${
                isLogin ? "left-0" : "left-0"
              }`}
              style={{
                transition: "transform 500ms",
                transform: isLogin ? "translateX(0)" : "translateX(100%)",
              }}
            ></div>
          </div>
          <button
            className="z-10 w-1/2 text-center"
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className="z-10 w-1/2 text-center"
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-grow justify-center items-center text-black w-full gap-8">
        {isLogin ? (
          <div className="flex w-full flex-col gap-4 items-center justify-center">
            <div className="flex flex-col text-white w-full gap-2">
              <p className="text-lg leading-snug font-bold">Email</p>
              <input
                className="h-[55px] text-lgca bg-transparent p-2 rounded border border-white text-[15px]"
                placeholder="Email"
              ></input>
            </div>
            <div className="flex flex-col text-white  w-full gap-2">
              <p className="text-lg leading-snug font-bold">Password</p>
              <input
                className="h-[55px] text-lgca bg-transparent p-2 rounded border border-white text-[15px]"
                placeholder="Password"
              ></input>
            </div>
            <a className="text-white underline cursor-pointer text-center">
              Forgot your Password?
            </a>
            <button
              className="z-10 w-1/2 text-center h-[40.49px] bg-[#1ed760] rounded-[53px] text-black text-2xl font-normal mt-8"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </div>
        ) : (
          <div className="flex w-full flex-col gap-4 items-center justify-center">
            <div className="flex flex-col text-white w-full gap-2">
              <p className="text-lg leading-snug font-bold">Name</p>
              <input
                className="h-[55px] text-lgca bg-transparent p-2 rounded border border-white text-[15px]"
                placeholder="Name"
              ></input>
            </div>
            <div className="flex flex-col text-white w-full gap-2">
              <p className="text-lg leading-snug font-bold">Date of birth</p>
              <div className="flex flex-row gap-2 w-full">
                <input
                  type="date"
                  className="h-[55px] w-full text-left text-white bg-transparent p-2 rounded border border-white"
                />
              </div>
            </div>

            <div className="flex flex-col text-white w-full gap-2">
              <p className="text-lg leading-snug font-bold">Email</p>
              <input
                className="h-[55px] text-lgca bg-transparent p-2 rounded border border-white text-[15px]"
                placeholder="Email"
              ></input>
            </div>
            <div className="flex flex-col text-white  w-full gap-2">
              <p className="text-lg leading-snug font-bold">Password</p>
              <input
                className="h-[55px] text-lgca bg-transparent p-2 rounded border border-white text-[15px]"
                placeholder="Password"
              ></input>
            </div>

            <button
              className="z-10 w-1/2 text-center h-[40.49px] bg-[#1ed760] rounded-[53px] text-black text-2xl font-normal mt-8"
              onClick={() => setIsLogin(true)}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
