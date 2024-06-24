import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

export const CarouseLoopImage = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [slide]);

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

      <div className="absolute flex bottom-4 space-x-2">
        {data.map((item, idx) => (
          <button
            key={idx}
            className={`${
              slide === idx ? "border-2 border-white" : ""
            } p-0 rounded border-none outline-none cursor-pointer`}
            onClick={() => setSlide(idx)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-10 h-10 rounded-md"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
