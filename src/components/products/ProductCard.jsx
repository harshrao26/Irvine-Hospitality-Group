"use client"
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export default function ProductCard({ image, title, tag }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-gray-50 rounded-lg shadow-sm overflow-hidden relative hover:shadow-md transition"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Cart Icon */}
      {hovered && (
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer transition-opacity duration-200">
          <FaShoppingCart className="text-gray-800" />
        </div>
      )}

      <div className="p-4">
        <span className="inline-block bg-blue-100 text-[#002C52] text-xs font-medium px-2 py-1 rounded-full mb-2">
          {tag}
        </span>
        <h3 className="text-sm font-medium text-gray-800">{title}</h3>
      </div>
    </div>
  );
}
