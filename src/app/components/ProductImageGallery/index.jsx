"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductImageGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageChange = (imageIndex) => (event) => {
    event.preventDefault();
    setSelectedImage(imageIndex);
  };

  return (
    !!images?.length > 0 && (
      <div className="flex flex-row-reverse" tabIndex={-1}>
        <figure className="basis-4/5 inline-flex justify-center items-center">
          <Image
            src={`${
              images[selectedImage].formats?.large.url ??
              images[selectedImage].url
            }`}
            alt=""
            width={400}
            height={460}
            className="h-[460px] rounded-lg object-cover mx-auto"
          />
        </figure>
        <ul className="basis-1/5 overflow-hidden py-2">
          {images?.map((image, index) => (
            <li key={image.id}>
              <Image
                key={image.id}
                src={`${image.formats?.thumbnail.url ?? image.url}`}
                alt=""
                width={100}
                height={100}
                className={`h-[100px] outline-black rounded-lg object-cover mx-auto hover:cursor-pointer ${
                  selectedImage === index ? "outline outline-2" : ""
                }
                ${index !== images.length - 1 ? "mb-4" : "mb-0"}`}
                onClick={handleImageChange(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
