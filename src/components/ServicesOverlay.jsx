'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import imgDefault from '@/assets/img.png';
import img1 from '@/assets/img.png';
import img2 from '@/assets/img2.png';
import img3 from '@/assets/img3.png';
import img4 from '@/assets/img4.png';

const ServicesOverlay = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [smoothCursor, setSmoothCursor] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const cards = [
    {
      title: 'Project Consulting',
      desc: 'End-to-end advisory & planning for hospitality ventures',
      image: img1,
    },
    {
      title: 'Design & Brand Submittal',
      desc: 'Visuals, specifications & 3D renders aligned with brand standards',
      image: img2,
    },
    {
      title: 'FF&E Procurement',
      desc: 'Global sourcing, value engineering & logistics management',
      image: img3,
    },
    {
      title: 'Post-Delivery Support',
      desc: 'Installation validation & ongoing service after handover',
      image: img4,
    },
  ];

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setSmoothCursor((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.1,
        y: prev.y + (cursorPos.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [cursorPos]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
      className="relative w-full h-screen overflow-hidden bg-black group"
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {cards.map((card, idx) => (
          <Image
            key={idx}
            src={card.image}
            alt={card.title}
            fill
            className={clsx(
              'object-cover absolute transition-opacity duration-700 ease-in-out',
              hoveredCard === idx ? 'opacity-100' : 'opacity-0'
            )}
          />
        ))}
        <Image
          src={imgDefault}
          alt="Default"
          fill
          className={clsx(
            'object-cover absolute transition-opacity duration-700 ease-in-out',
            hoveredCard === null ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Custom Cursor */}
      {showCursor && (
        <div
          className="pointer-events-none fixed z-50 hidden md:block"
          style={{
            top: smoothCursor.y - 40,
            left: smoothCursor.x - 40,
          }}
        >
          <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center">
            <span className="text-white text-3xl transform rotate-45">↓</span>
          </div>
        </div>
      )}

      {/* Cards */}
      <div className="relative z-20 h-full flex items-center justify-center py-20 md:py-60">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full max-w-7xl">
          {cards.map((card, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="h-[200px] sm:h-[280px] md:h-screen px-4 flex border-r border-l border-zinc-500 w-full justify-end flex-col transition-all duration-500"
            >
              <div className="mb-10 hover:mb-20 transition-all duration-500">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{card.title}</h3>
                <p className="text-sm md:text-base text-gray-200">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverlay;
