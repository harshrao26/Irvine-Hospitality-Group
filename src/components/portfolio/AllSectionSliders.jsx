"use client";
import { useEffect, useState } from "react";
import projects from "../data/projects";

export default function AllSectionSliders() {
  const [currentIndexes, setCurrentIndexes] = useState(projects.map(() => 0));
  const [fadeStates, setFadeStates] = useState(projects.map(() => true));

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade-out
      setFadeStates(projects.map(() => false));

      // Wait for fade-out to complete, then change image and fade in
      setTimeout(() => {
        setCurrentIndexes((prev) =>
          prev.map((index, sectionIdx) => {
            const total = projects[sectionIdx].images.length;
            return (index + 1) % total;
          })
        );
        setFadeStates(projects.map(() => true));
      }, 300); // match fade-out duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      {projects.map((section, idx) => {
        const currentImage = section.images[currentIndexes[idx]];
        const isVisible = fadeStates[idx];

        return (
          <div
            key={section.name}
            className="flex flex-col md:flex-row items-start gap-6 group"
          >
            {/* Section Name */}
            <div className="md:min-w-[250px]">
              <h2 className="text-2xl w-60 md:text-3xl font-bold text-gray-900 group-hover:tracking-wide transition-all duration-300">
                {section.name}
              </h2>
              <div className="mt-2 h-[2px] w-12 bg-black group-hover:w-20 transition-all duration-300" />
            </div>

            {/* Image Block */}
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <img
                src={currentImage.url}
                alt={currentImage.text}
                className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-sm md:text-base font-medium backdrop-blur-sm">
                {currentImage.text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
