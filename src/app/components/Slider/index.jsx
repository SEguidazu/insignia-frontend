"use client";
import React, { useState } from "react";
import { Image, Button } from "@nextui-org/react";

import { ArrowRightIcon } from "@/assets/icons";

export default function Slider({ images = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    if (currentSlide === 0) setCurrentSlide(images.length - 1);
    else setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    if (currentSlide === images.length - 1) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    images.length > 0 && (
      <section
        id="slider"
        className="overflow-hidden relative rounded-lg mb-9"
        aria-hidden
      >
        <ul
          className="w-full flex transition-transform ease-out duration-1000"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((slide) => (
            <li key={slide.id} className="w-full shrink-0">
              <Image
                className="w-full max-h-[400px] object-cover"
                src={`http://127.0.0.1:1337${slide.url}`}
                alt={slide?.alternativeText ?? ""}
                removeWrapper
              />
            </li>
          ))}
        </ul>

        <div
          id="arrow-buttons"
          className="w-full px-4 flex justify-between items-center absolute top-0 bottom-0"
        >
          <Button
            isIconOnly
            onClick={prevSlide}
            className="rounded-full bg-white rotate-180"
          >
            <ArrowRightIcon />
          </Button>
          <Button
            isIconOnly
            onClick={nextSlide}
            className="rounded-full bg-white "
          >
            <ArrowRightIcon />
          </Button>
        </div>

        <div
          id="dots-buttons"
          className="flex justify-center mb-4 absolute bottom-0 left-0 right-0"
        >
          {images.map((slide, index) => (
            <Button
              key={slide.id}
              className="min-w-0 w-[1.4rem] h-[1.4rem] mx-1 px-0"
              style={{
                backgroundColor: currentSlide === index ? "#ccc" : "white",
              }}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </section>
    )
  );
}
