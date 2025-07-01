'use client';

import { useEffect, useRef, useState } from 'react';

const LayoutProject = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  const [canScroll, setCanScroll] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [smoothCursor, setSmoothCursor] = useState({ x: 0, y: 0 });

  const images = [
    'https://unsplash.it/600/400?image=1027',
    'https://unsplash.it/600/400?image=1062',
    'https://unsplash.it/600/400?image=1074',
    'https://unsplash.it/600/400?image=1084',
    'https://unsplash.it/600/400?image=1085',
    'https://unsplash.it/600/400?image=1086',
  ];

  const labels = [
    'Guestroom Case Goods',
    'Lobby & Reception Furniture',
    'Restaurant & Café Seating',
    'Custom Lighting Solutions',
    'Upholstered Lounge Sets',
    'Brand-Approved Room Packages',
  ];

  useEffect(() => {
    const container = containerRef.current;
    const scrollable = scrollRef.current;

    const onScroll = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      setCanScroll(rect.top <= 0);
    };

    const handleWheel = (e) => {
      if (!canScroll || !scrollable) return;
      const { scrollTop, scrollHeight, clientHeight } = scrollable;
      const atTop = scrollTop === 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight;
      if (!(e.deltaY < 0 && atTop) && !(e.deltaY > 0 && atBottom)) {
        e.preventDefault();
        scrollable.scrollTop += e.deltaY;
      }
    };

    window.addEventListener('scroll', onScroll);
    container?.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('scroll', onScroll);
      container?.removeEventListener('wheel', handleWheel);
    };
  }, [canScroll]);

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
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [cursorPos]);

  return (
    <div
      ref={containerRef}
      className="w-full md:block hidden min-h-screen max-w-7xl mx-auto relative px-4"
    >
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        {/* Left Panel */}
        <div className="md:w-1/3 w-full sticky top-0 md:h-screen bg-white py-12 md:py-20 pr-4 flex flex-col justify-center">
          <h3 className="text-base text-[#000000] mb-2 uppercase tracking-wide">
            › Integrated FF&E Services
          </h3>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#082135] mb-4 leading-snug">
            End-to-End Project Support
          </h2>
          <p className="text-[#082135] text-sm md:text-base leading-relaxed">
            Irvine Hospitality delivers design, procurement, and manufacturing expertise
            through every phase of your hospitality project — from concept development to final installation.
          </p>
        </div>

        {/* Right Scrollable Panel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
          onMouseMove={handleMouseMove}
          className="md:w-2/3 w-full h-[70vh] md:h-screen overflow-y-auto pt-10 md:pt-20 pb-16 md:pl-8 space-y-10 cursor-none md:cursor-default relative"
        >
          {images.map((src, index) => (
            <div key={index} className="w-full">
              <img
                src={src}
                alt={`img-${index}`}
                className="rounded-lg shadow-md w-full object-cover max-h-[380px]"
              />
              <p className="mt-2 text-sm font-bold text-[#082135]">
                {labels[index % labels.length]}
              </p>
            </div>
          ))}

          {/* Cursor for Desktop */}
          {showCursor && (
            <div
              className="pointer-events-none fixed z-50 hidden md:block"
              style={{
                top: smoothCursor.y - 40,
                left: smoothCursor.x - 40,
              }}
            >
              <div className="w-20 h-20 rounded-full bg-[#00294A] text-white text-xs flex items-center justify-center border-white">
                Scroll here
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LayoutProject;
