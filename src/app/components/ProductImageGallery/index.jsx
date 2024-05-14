"use client";

import { useState } from "react";
import { Image } from "@nextui-org/react";

export default function ProductImageGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageChange = (imageIndex) => (event) => {
    event.preventDefault();
    setSelectedImage(imageIndex);
  };

  return (
    !!images?.length > 0 && (
      <>
        <figure className="w-full shrink-0 p-2">
          <Image
            src={`${
              images[selectedImage].formats?.large.url ??
              images[selectedImage].url
            }`}
            alt=""
            className="h-80 sm:h-[460px] rounded-lg object-cover mx-auto"
            removeWrapper
          />
        </figure>
        <ul className="w-full flex flex-nowrap justify-items-center items-start gap-x-2 p-0.5 border-x-8 border-main_bgcolor overflow-x-scroll scroll-smooth snap-x shadow-inner">
          {images?.map((image, index) => (
            <li key={image.id} className="snap-center shrink-0">
              <Image
                src={`${image.formats?.thumbnail.url ?? image.url}`}
                alt=""
                width={100}
                className={`h-[100px] relative outline-black rounded-lg object-cover mx-auto hover:cursor-pointer ${
                  selectedImage === index ? "outline outline-2" : ""
                }`}
                onClick={handleImageChange(index)}
                removeWrapper
              />
            </li>
          ))}
        </ul>
      </>
    )
  );
}
