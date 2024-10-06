import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
// Import images
import slide1 from "../assets/images/sliders/slide1.jpg";
import slide2 from "../assets/images/sliders/slide2.jpg";
import slide3 from "../assets/images/sliders/slide3.jpg";
import slide4 from "../assets/images/sliders/slide4.jpg";
import slide5 from "../assets/images/sliders/slide5.jpg";

export default function Featured() {
  const sliders = [
    { slide: slide1 },
    { slide: slide2 },
    { slide: slide3 },
    { slide: slide4 },
    { slide: slide5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliders.length) % sliders.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-[1520px] w-full h-full py-4 px-4 relative group">
      {/* Slider Image */}
      <div
        className="w-full h-96 rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].slide})` }}
      />

      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 cursor-pointer"
        onClick={handlePrev}
      >
        <BsChevronCompactLeft />
      </div>

      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 cursor-pointer"
        onClick={handleNext}
      >
        <BsChevronCompactRight />
      </div>

      {/* Dots Navigation */}
      <div className="flex top-4 justify-center py-2">
        {sliders.map((_, index) => (
          <div
            key={index}
            className={`text-2xl cursor-pointer ${index === currentIndex ? 'text-blue-600' : 'text-gray-400'}`}
            onClick={() => goToSlide(index)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
