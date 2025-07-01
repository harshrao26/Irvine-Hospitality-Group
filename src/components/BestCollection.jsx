"use client";
import React, { useState, useEffect } from "react";
import media from "@/assets/products/i1.png";
import media2 from "@/assets/products/i2.png";
import media3 from "@/assets/products/i3.png";
import media4 from "@/assets/products/i4.png";
import Image from "next/image";

const galleryItems = [
  {
    image: media,
    caption: "Upholstered Guestroom Furniture",
    date: "Custom-built | 2024",
  },
  {
    image: media2,
    caption: "Signature Lighting Collection",
    date: "Irvine Exclusive | 2024",
  },
  {
    image: media3,
    caption: "Lounge & Lobby Seating",
    date: "Turnkey Series | 2024",
  },
  {
    image: media4,
    caption: "Modular Case Goods",
    date: "Value Engineered | 2024",
  },
];

export default function EventGalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getStyle = (index) => {
    if (index === activeIndex) return "z-20 scale-100 opacity-100";
    if (
      index === (activeIndex + 1) % galleryItems.length ||
      index === (activeIndex - 1 + galleryItems.length) % galleryItems.length
    ) {
      return "z-10 scale-95 opacity-70";
    }
    return "hidden md:block opacity-0 scale-90";
  };

  const getPosition = (index) => {
    if (index === activeIndex) return "left-1/2 -translate-x-1/2";
    if (index === (activeIndex + 1) % galleryItems.length)
      return "left-2/3 -translate-x-1/2";
    if (index === (activeIndex - 1 + galleryItems.length) % galleryItems.length)
      return "left-1/3 -translate-x-1/2";
    return "left-1/2 -translate-x-1/2";
  };

  return (
    <div className="bg-[#F5F5F5] py-12">
      <div className="w-full max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <p className="uppercase text-sm text-gray-500 mb-2">Featured</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
          Signature <br className="hidden md:block" />
          FF&E Showcase
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-10">
          Explore our premium range of turnkey furniture and fixtures—
          crafted for aesthetics, performance, and hospitality-grade durability.
        </p>

        {/* Carousel */}
        <div className="relative h-[430px] md:h-[460px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`absolute top-0 transition-all duration-500 transform ${getPosition(
                index
              )} ${getStyle(index)} w-full sm:w-auto`}
            >
              <div className="w-[90vw] sm:w-96 md:w-[600px] overflow-hidden rounded-xl shadow-2xl bg-white hover:shadow-blue-200 transition-shadow mx-auto">
                <Image
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-[#002C52]">{item.caption}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {galleryItems.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-orange-600 scale-110" : "bg-blue-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
