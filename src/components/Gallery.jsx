"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
];

export default function GalleryPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Coaching Yaari Gallery
      </h1>

      <div className="relative w-full max-w-4xl h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-xl">
        
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Gallery ${index}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}