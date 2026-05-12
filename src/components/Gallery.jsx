"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Install lucide-react or use SVGs

const images = [
  "/gallery1.jpeg", "/gallery2.jpeg", "/gallery3.jpeg",
   "/gallery4.jpeg", "/gallery5.jpeg", "/gallery6.jpeg",
  // "/gallery8.jpeg", "/gallery9.jpeg",
];

export default function GalleryPage() {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Screen size detection (Optimized)
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev >= images.length - itemsPerView ? 0 : prev + 1));
  }, [itemsPerView]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - itemsPerView : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    // min-h-screen ko remove kiya taaki niche extra space na bache
    <div className="w-full bg-gray-50 py-12 px-4 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Coaching <span className="text-blue-600">Yaari</span> Gallery
          </h1>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Slider Container */}
        <div className="relative group">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.55,1)]"
              style={{
                transform: `translateX(-${(current * 100) / itemsPerView}%)`,
              }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="p-2 md:p-4 shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group/card">
                    <Image
                      src={img}
                      alt={`Gallery Image ${index + 1}`}
                      fill
                      className="object-cover transform group-hover/card:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-medium">Moment {index + 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows (Visible on Hover) */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: images.length - itemsPerView + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 transition-all duration-300 rounded-full ${
                current === i ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}