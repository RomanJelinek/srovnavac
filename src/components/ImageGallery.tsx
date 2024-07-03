"use client";

import { useState } from "react";
import Image from "next/image";

type ImageGalleryProps = {
  images: string[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openModal(index)}
          >
            <Image
              src={image}
              alt="alt"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="object-cover w-full h-32 sm:h-40 md:h-48 rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => closeModal()}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={images[currentIndex]}
              alt={"alt"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ height: "auto" }}
              className="w-full min-w-95vw md:min-w-[800px] max-h-screen object-contain rounded-lg"
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl"
              onClick={prevImage}
            >
              &#10094;
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl"
              onClick={nextImage}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
