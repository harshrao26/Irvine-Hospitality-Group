'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import logo from '@/assets/logo.png';

gsap.registerPlugin(ScrollTrigger);

export default function BrandIntro() {
  const sectionRef = useRef();
  const lineRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: '100%',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'center center',
          scrub: true
        },
        ease: 'none'
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-40 bg-[#002C52] text-white flex items-center justify-center"
    >
      <div className="max-w-7xl w-full px-6 grid md:grid-cols-2 items-center gap-10">
        {/* Left: Logo + Dot-Line-Dot */}
        <div className="flex flex-  items-center relative h-[200px]">
          <Image src={logo} alt="Logo" width={80} height={80} className="mb-6" />

          <div className='h-80'>
             {/* Dot A */}
          <div className="w-[3px] h-[3px] bg-white rounded-full mb-1" />

          {/* Animated Line */}
          <div
            ref={lineRef}
            className="w-[1px] ml-[1px] bg-white transition-all duration-500 origin-top"
            style={{ height: '0px' }}
          />

          {/* Dot B */}
          <div className="w-[3px] h-[3px] bg-white rounded-full mt-1" />
          </div>

         
        </div>

        {/* Right: Tagline Text */}
        <div className="text-center md:text-left space-y-3">
          <h2 className="text-4xl md:text-5xl font-light leading-snug"               style={{ fontFamily: "Ethereal" }}
>
            Changing <br />
            spaces <br />
            Transforming <br />
            businesses
          </h2>
        </div>
      </div>
    </section>
  );
}
