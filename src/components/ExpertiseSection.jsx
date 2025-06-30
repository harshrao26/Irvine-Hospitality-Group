import React from 'react';

const ExpertiseSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-start justify-between md:items-center gap-12">
      <div className="flex-shrink-0 text-blue-900 font-semibold text-3xl">
        <span className="text-blue-300 mr-2">›</span>Our expertises
      </div>

      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4" >
          ADVISE, DESIGN, BUILD, FURNISH, SUSTAIN.
        </h2>
        <p className="text-blue-900 text-lg leading-relaxed">
          As a creator of professional spaces, we advise, design, build,
          furnish, and maintain hospitality and work environments. Our ambition?
          To turn your spaces into catalysts for transformation—enhancing
          experience, driving growth, and adding meaning.
        </p>
      </div>
    </section>
  );
};

export default ExpertiseSection;
