import React from "react";
import img2 from "../assets/intern 3.png";
import tick from "../assets/tick.svg";
import img3 from "../assets/intern 4.png";

export const Second = () => {
  return (
    <div className="">
      <div className="h-[700px] flex mt-10 mb-20 mx-8 px-40 ">
        <div className="w-1/2 pl-16 flex items-start">
          <img className="w-[840px] mt-10" src={img2} alt="" />
        </div>
        <div className="w-1/2 pl-40 mx-10 flex flex-col items-start">
          <div className=" m-6 pt-36 text-5xl">
            We Provide Many <br />
            Features You Can Use
          </div>
          <p className="mx-6 text-xl text-gray-600">
            {" "}
            You can explore the features that we provide with fun and
            <br /> have their own function each feature{" "}
          </p>
          <ul className=" pl-10 my-3">
            <li className="flex text-xl my-6 text-gray-600">
              <img className="max-h-6 pr-4" src={tick} alt="" />
              Powerfull online protection
            </li>
            <li className="flex text-xl my-6 text-gray-600">
              <img className="max-h-6 pr-4" src={tick} alt="" />
              Internet without borders
            </li>
            <li className="flex text-xl my-6 text-gray-600">
              <img className="max-h-6 pr-4" src={tick} alt="" />
              Supercharged VPN
            </li>
            <li className="flex text-xl my-6 text-gray-600">
              <img className="max-h-6 pr-4" src={tick} alt="" />
              No specific time limit
            </li>
          </ul>
        </div>
      </div>
      <div className="h-[1000px] mt-12 mb-4 flex flex-col">
        <div className="h-1/4 mt-16 flex flex-col items-center">
          <h1 className="text-4xl mt-12">Choose Your Plan</h1>
          <p className="text-xl mt-8 text-gray-600">
            Let's choose the package that is best for you and explore it happily
            and{" "}
          </p>{" "}
          <p className="text-xl  text-gray-600">cheerfully.</p>
        </div>
        <div className="h-3/4 flex mt-4 mx-8 mb-10 px-40 ">
          <div className="w-1/3 h-5/6 my-14 mx-16 border-4 border-gray-400 rounded-2xl flex flex-col items-center hover:border-main-orange hover:border-6">
            <img className="min-h-96 min-w-60 " src={img3} alt="" />
            <h1 className="text-3xl">Free Plan</h1>
            <p className="mt-2 text-xl text-gray-600"> XXX$ / yr</p>
            <ul className="m-4">
              <li> • Lorem ipsum dolor sit amet consectetur.</li>
              <li> • Lorem, ipsum.</li>
              <li> • Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <div className="w-1/3 h-5/6 my-14 mx-16 border-4 border-gray-400 rounded-2xl flex flex-col items-center hover:border-main-orange hover:border-6">
            <img className="min-h-96 min-w-60 " src={img3} alt="" />
            <h1 className="text-3xl">Standard Plan</h1>
            <p className="mt-2 text-xl text-gray-600"> XXX$ / yr</p>
            <ul className="m-4">
              <li> • Lorem ipsum dolor sit amet consectetur.</li>
              <li> • Lorem, ipsum.</li>
              <li> • Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <div className="w-1/3 h-5/6 my-14 mx-16 border-4 border-gray-400 rounded-2xl flex flex-col items-center hover:border-main-orange hover:border-6">
            <img className="min-h-96 min-w-60 " src={img3} alt="" />
            <h1 className="text-3xl">Premium Plan</h1>
            <p className="mt-2 text-xl text-gray-600"> XXX$ / yr</p>
            <ul className="m-4">
              <li> • Lorem ipsum dolor sit amet consectetur.</li>
              <li> • Lorem, ipsum.</li>
              <li> • Lorem, ipsum dolor.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
