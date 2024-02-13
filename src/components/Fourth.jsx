import React from "react";
import data from "../info/data";
import dummy from "../assets/dymmy.jpg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Fourth = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="h-[1100px] mt-40 ">
      <div className="h-[220px]">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl">Trusted by Thousand of</h1>
          <h1 className="text-5xl">Happy customer</h1>
          <br />
          <p className="text-xl text-gray-500">
            These are the stories of our customer who have joined us with great{" "}
          </p>
          <p className="text-xl text-gray-500">
            pleasure when using the crazy feature.
          </p>
        </div>
      </div>
      <div className="h-[600px]  ">
        <Slider {...settings}>
          {data.map((p) => (
            <div className="h-[360px] w-[500px] border-4 border-gray-300 mt-6 px-4 rounded-2xl hover:border-second-orange ">
              <div className="h-2/5 flex items-center ">
                <img
                  className="max-h-28 rounded-full mt-6"
                  src={p.image}
                  alt=""
                />
                <div className="p-6">
                  <h1 className="text-3xl font-semibold w-60">{p.name}</h1>
                  <p className="text-base pl-3 text-gray-500">{p.address}</p>
                </div>
                <div className="pl-16 text-2xl">
                  {p.star} <span className="text-3xl text-yellow-300">★</span>
                </div>
              </div>
              <div className="h-3/5 w-auto p-4 ">
                <p className="text-xl text-gray-700">{p.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className=" h-[280px] mr-72 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-2xl shadow-xl flex items-center justify-evenly ">
        <div className="w-1/2 flex flex-col justify-center pt-4">
          <h1 className="text-5xl font-semibold">Subscribe Now for </h1>
          <h1 className="text-5xl font-semibold">Get Special Feature!</h1>
          <p className="p-2 text-base text-gray-500">
            Let's subscribe with us and find the fun
          </p>
        </div>
        <div className="">
          <button
            type="button"
            className=" min-w-80 min-h-14 mx-12 bg-main-orange hover:bg-second-orange text-white font-medium rounded-xl text-xl px-4 py-2 text-center border-main-orange shadow-lg shadow-main-orange "
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};
