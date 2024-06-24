import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

export const CarouseLoopImageB = ({ data }) => {
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
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-center items-center w-[600px] h-[400px]">
        <ChevronLeft
          onClick={prevSlide}
          className="absolute left-4 filter drop-shadow-md w-8 h-8 text-white cursor-pointer"
        />
        {data.map((item, idx) => (
          <img
            key={idx}
            src={item.src}
            alt={item.alt}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              slide === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <ChevronRight
          onClick={nextSlide}
          className="absolute right-4 filter drop-shadow-md w-8 h-8 text-white cursor-pointer"
        />
      </div>

      <div className="flex mt-4 space-x-2">
        {data.map((item, idx) => (
          <button
            key={idx}
            className={`${
              slide === idx ? "border-2 border-blue-500" : ""
            } p-0 rounded border-none outline-none cursor-pointer`}
            onClick={() => setSlide(idx)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-16 h-16 rounded-md"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
