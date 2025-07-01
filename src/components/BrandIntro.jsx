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
      className="py-20 bg-[#002C52] text-white flex items-center justify-center"
    >
      <div className="max-w-7xl w-full px-6 grid md:grid-cols-2 items-center gap-1 0">
        {/* Left: Logo + Line */}
        <div className="flex flex-col items-center md:items-start relative h-[100px]">
          <Image src={logo} alt="Logo" width={80} height={80} className="mb-6" />

           
        </div>

        {/* Right: Brand Messaging */}
        <div className="text-center md:text-left space-y-4">
          <h2
            className="text-4xl md:text-5xl font-light leading-snug"
            style={{ fontFamily: 'Ethereal' }}
          >
            Innovating<br />
            hospitality design,<br />
            procurement &<br />
            manufacturing
          </h2>
          <p className="text-sm md:text-base text-gray-200">
            A trusted FF&E partner for 150+ hotel owners — delivering over 400 projects worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
