import React from "react";
import img1 from "../assets/intern2.png";
import user from "../assets/user.svg";
import location from "../assets/location.svg";
import server from "../assets/server.svg";

export const Hero = () => {
  return (
    <div className="mb-8 mt-8">
      <div className="h-[560px] flex mx-4 px-40 mb-8 ">
        <div className="w-2/4 flex items-center justify-start ">
          <div className=" mt-10 ml-10 ">
            <h1 className=" mt-8 mb-10 lg:text-6xl sm:text-2xl font-semibold text-gray-900 dark:text-white tracking-wide ">
              <span className="px-10 py-20">Want anything to be</span> <br />
              <span className="px-10 py-20">
                easy with <b>LaslesVPN.</b>
              </span>
            </h1>
            <p className="lg:text-xl m-10 text-gray-700 dark:text-white">
              Provide a network for all your needs with ease and fun using{" "}
              <b>LaslesVPN</b>
              <br />
              discover inteeresting features from us
            </p>
            <button
              type="button"
              className=" min-w-80 min-h-20 mt-10 mx-12 bg-main-orange hover:bg-second-orange text-white font-medium rounded-xl text-2xl px-4 py-2 text-center border-main-orange shadow-lg shadow-main-orange"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="w-2/4 flex items-center  ">
          <img className="w-[840px] mt-10" src={img1} alt="" />
        </div>
      </div>
      <div className="h-[250px] flex my-10 px-40 ">
        <div className="w-1/3 m-4 flex ">
          <div className=" flex justify-end items-center w-1/2">
            <div className=" flex justify-center items-center min-w-24 min-h-24 rounded-full bg-[#fcc4cc]">
              <img className="max-h-14" src={user} alt="" />
            </div>
          </div>
          <div className=" flex flex-col justify-center w-1/2">
            <div className="pl-2 pt-100 text-4xl">
              <b>90+</b>
            </div>
            <div className="pl-3 text-xl">Users</div>
          </div>
        </div>
        <div className="w-1/3 m-4 flex ">
          <div className=" flex justify-end items-center w-1/2">
            <div className=" flex justify-center items-center min-w-24 min-h-24 rounded-full bg-[#fcc4cc]">
              <img className="max-h-14" src={location} alt="" />
            </div>
          </div>
          <div className=" flex flex-col justify-center w-1/2">
            <div className="pl-2 pt-100 text-4xl">
              <b>30+</b>
            </div>
            <div className="pl-3 text-xl">Locations</div>
          </div>
        </div>
        <div className="w-1/3 m-4 flex ">
          <div className=" flex justify-end items-center w-1/2">
            <div className=" flex justify-center items-center min-w-24 min-h-24 rounded-full bg-[#fcc4cc]">
              <img className="max-h-14" src={server} alt="" />
            </div>
          </div>
          <div className=" flex flex-col justify-center w-1/2">
            <div className="pl-2 pt-100 text-4xl">
              <b>50+</b>
            </div>
            <div className="pl-3 text-xl">Servers</div>
          </div>
        </div>
      </div>
      <div className=" my-12 min-h-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50"></div>
    </div>
  );
};
