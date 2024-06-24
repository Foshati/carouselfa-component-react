import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="relative flex justify-center items-center w-[600px] h-[400px]">
      <ChevronLeft
        onClick={prevSlide}
        className="absolute left-4 filter drop-shadow-md w-8 h-8 text-white cursor-pointer"
      />
      {data.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={`${slide === idx ? "block" : "hidden"} rounded-md shadow-md w-full h-full`}
        />
      ))}
      <ChevronRight
        onClick={nextSlide}
        className="absolute right-4 filter drop-shadow-md w-8 h-8 text-white cursor-pointer"
      />

      <span className="absolute flex bottom-4">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={`${
              slide === idx ? "bg-white" : "bg-gray-500"
            } h-2 w-2 rounded-full border-none outline-none shadow-md mx-1 cursor-pointer`}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};
