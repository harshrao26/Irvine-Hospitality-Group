'use client';

import { useRef, useEffect, useState } from 'react';

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

  // Handle scroll locking
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
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', onScroll);
      container.removeEventListener('wheel', handleWheel);
    };
  }, [canScroll]);

  // Mouse tracking
  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // Smooth animation using requestAnimationFrame
  useEffect(() => {
    let animationFrame;
    const smoothMove = () => {
      setSmoothCursor((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.1,
        y: prev.y + (cursorPos.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(smoothMove);
    };
    animationFrame = requestAnimationFrame(smoothMove);
    return () => cancelAnimationFrame(animationFrame);
  }, [cursorPos]);

  return (
    <div ref={containerRef} className="w-full h-screen max-w-7xl mx-auto relative">
      <div className="flex w-full h-screen">
        {/* Sticky Left Panel */}
        <div className="w-1/3 sticky top-0 h-screen bg-white p-10 flex flex-col justify-center">
          <h3 className="text-lg text-[#c6d7e3] mb-2">› Your project</h3>
          <h2 className="text-2xl font-semibold text-[#082135] mb-4 leading-snug">
            Do you have a<br />layout project?
          </h2>
          <p className="text-[#082135] text-sm leading-relaxed">
            Whatever the scope of your project, Korus Group will accompany you
            every step of the way, putting its team of experts at your disposal
            to assess custom-made solutions for the layout of professional spaces.
          </p>
        </div>

        {/* Scrollable Right Panel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
          onMouseMove={handleMouseMove}
          className="w-2/3 h-screen overflow-y-auto p-10 space-y-10 cursor-none relative"
        >
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`img-${index}`}
                className="rounded-lg shadow-md w-full"
              />
              <p className="mt-2 text-sm font-bold text-[#082135]">
                {index % 2 === 0 ? 'ACCOMMODATION' : 'CAFÉ & RESTAURANT'}
              </p>
            </div>
          ))}

          {/* Smooth Custom Cursor */}
          {showCursor && (
            <div
              className="pointer-events-none fixed z-50"
              style={{
                top: smoothCursor.y - 40,
                left: smoothCursor.x - 40,
              }}
            >
              <div className="w-20 h-20 rounded-full bg-[#00294A] text-white text-xs flex items-center justify-center   border-white">
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
