import React from "react";
import IconRating from "../assets/rating.png";
import RapViet from "../assets/rapviet.png";
import IconPlay from "../assets/iconplay.png";

const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative"    >
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40"      />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[45%]"        >
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-2 px-2" >
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px] font-bold">Nghe nói em thích tôi</h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
            </div>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of printing and typesetting
              industry.
            </p>
            <div              className="flex items-center
            space-x-4"            >
              <button                className="p-2 text-white 
                bg-black font-bold text-sm"              >
                Xem ngay
              </button>
              <button                className="p-2 text-white 
                bg-red-600 font-bold text-sm"              >
                Chi tiết
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[400px] h-[400px] relative group cursor-pointer">
            <img
              src={RapViet}
              alt="temp"
              className="w-full h-full object-cover"
            />
            <div
              className="w-full h-full absolute top-0 left-0
                flex items-center justify-center backdrop-blur-sm 
                opacity-0 group-hover:opacity-100 transition-opacity
                duration-500 ease-in-out"
            >
              <img
                src={IconPlay}
                alt="play"
                className="w-16 h-16 relative z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
