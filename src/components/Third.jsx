import React from "react";
import map from "../assets/map.jpg";
import netflix from "../assets/netflix.svg";
import reddit from "../assets/reddit.svg";
import amazon from "../assets/amazon.svg";
import discord from "../assets/discord.svg";
import spotify from "../assets/spotify.svg";

export const Third = () => {
  return (
    <div className="h-[1000px] flex-col my-8 mx-8 px-40 items-center justify-center ">
      <img
        className="self-center max-h-[800px] opacity-60 pt-20 mt-36 ml-64 mb-12"
        src={map}
        alt=""
      />

      <div className="h-[200px] flex  ">
        <div className="w-1/5 flex justify-center items-start">
          <img className="opacity-60 max-w-56 " src={netflix} alt="" />
        </div>
        <div className="w-1/5 flex justify-center items-start">
          <img className=" opacity-60 max-w-56 " src={reddit} alt="" />
        </div>
        <div className="w-1/5 flex justify-center items-start">
          <img className="opacity-60 mt-2 max-w-56 " src={amazon} alt="" />
        </div>
        <div className="w-1/5 flex justify-center items-start">
          <img className="opacity-60 max-w-56 " src={discord} alt="" />
        </div>
        <div className="w-1/5 flex justify-center items-start">
          <img className=" opacity-60 max-w-56 " src={spotify} alt="" />
        </div>
      </div>
    </div>
  );
};
