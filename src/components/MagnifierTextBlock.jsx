'use client';
import { useEffect, useRef, useState } from 'react';

const MagnifierTextBlock = () => {
  const containerRef = useRef(null);
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hoveringText, setHoveringText] = useState(false);

  // Smooth animation with requestAnimationFrame
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setCursor(prev => {
        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [targetPos]);

  // Mouse tracking within the container only
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setTargetPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen bg-white overflow-hidden"
    >
      {/* Magnifier cursor */}
      <div
        className="pointer-events-none absolute z-50 rounded-full border border-blue-500"
        style={{
          transform: `translate(${cursor.x - (hoveringText ? 50 : 30)}px, ${cursor.y - (hoveringText ? 50 : 30)}px)`,
          width: hoveringText ? 100 : 60,
          height: hoveringText ? 100 : 60,
          backgroundColor: hoveringText ? 'rgba(255,255,255,0.2)' : 'transparent',
          backdropFilter: hoveringText ? 'blur(10px)' : 'none',
          transition: 'width 0.15s ease, height 0.1s ease, background-color 0.15s ease',
        }}
      ></div>

      {/* Text Content */}
      <div className="max-w-7xl mx-auto h-full flex items-center px-4">
        <div className="border-l border-blue-900 pl-6">
          <p
            onMouseEnter={() => setHoveringText(true)}
            onMouseLeave={() => setHoveringText(false)}
            className="text-4xl md:text-5xl font-light leading-snug text-blue-900"
          >
            Korus Group<br />
            advises, designs,<br />
            and builds workspaces<br />
            that are <span className="text-orange-400 font-bold">stylish</span><br />
            in which users feel good.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MagnifierTextBlock;
