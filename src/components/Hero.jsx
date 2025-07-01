"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SpinningText } from "@/components/magicui/spinning-text";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const linesRef = useRef([]);
  const imageRef = useRef();
  const textBlockRef = useRef();

  useEffect(() => {
    // Animate headline lines with stagger
    gsap.from(linesRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.3,
    });

    // Scroll-triggered image fade-in
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    // Scroll-triggered text fade-in
    gsap.from(textBlockRef.current, {
      scrollTrigger: {
        trigger: textBlockRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.sanity.io/files/uqxwe2qj/production/acb3cdaddddd9a53c21e3b65d9ee71ce8985d157.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Animated Headline */}
      <div className="relative z-10 font-ethereal text-center max-w-7xl mx-auto px-6  flex flex-col items-  justify-center h-full text-white space-y-4">
        {["All Your Hospitality Needs, ", "One Global Source"].map(
          (line, i) => (
            <h1
              style={{ fontFamily: "Ethereal" }}
              key={i}
              ref={(el) => (linesRef.current[i] = el)}
              className="text-5xl font-ethereal  md:text-8xl font-semibold capitalize tracking-wide"
            >
              {line}
            </h1>
          )
        )}

        <p className="capitalize text-2xl">
          a turnkey solution for your complex hospitality needs
        </p>
      </div>

      {/* Scroll-triggered Image Card */}
      {/* <div
        ref={imageRef}
        className="absolute bottom-10 right-10 z-20 bg-white p-4 shadow-md max-w-md"
      >
        <img
          src="https://images.unsplash.com/photo-1602526216435-6d7e3b1597bb"
          alt="Speaker"
          className="w-full h-auto rounded"
        />
        <p className="mt-2 text-black text-sm font-medium">
          Korus Group at the 16th Edition of <br />
          Perspective Europe
        </p>
      </div> */}

      {/* Scroll-triggered CTA (Bottom Left) */}
      <div className="absolute md:bottom-10 bottom-16 md:left-1/2 left-[45%]  animate-bounce transition-all ease-in-out duration-1000 z-20">
        <div className="w-12 h-12 rounded-full border z-20 border-white flex items-center justify-center">
          <span className="text-2xl text-white">↓</span>
        </div>
      </div>
    </div>
  );
}
