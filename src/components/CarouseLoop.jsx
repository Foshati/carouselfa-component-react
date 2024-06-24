import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

export const CarouselLoop = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500); // Duration of the fade animation
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 500); // Duration of the fade animation
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <div className="relative w-[600px] h-[400px] overflow-hidden">
      <ChevronLeft
        onClick={prevSlide}
        className="absolute left-4 filter drop-shadow-md w-8 h-8 text-white cursor-pointer z-10 top-1/2 transform -translate-y-1/2"
      />
      {data.map((item, idx) => (
        <img
          key={idx}
          src={item.src}
          alt={item.alt}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            slide === idx ? "opacity-100" : "opacity-0 pointer-events-none"
          } ${isAnimating && "pointer-events-none"}`}
        />
      ))}
      <ChevronRight
        onClick={nextSlide}
        className="absolute right-4 filter drop-shadow-md w-8 h-8 text-white cursor-pointer z-10 top-1/2 transform -translate-y-1/2"
      />

      <span className="absolute bottom-4 flex justify-center w-full">
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
