"use client";

const BusinessCTASection = () => {
  return (
    <div className="bg-[#002C52] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
      
      {/* Left Block */}
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-light leading-snug">
          Your place of business <span className="font-bold">tailored to</span><br />
          <span className="font-bold">your challenges</span> and user needs.
        </h2>

        {/* CTA Button */}
        <button className="mt-6 bg-[#f99f34] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition duration-200">
          Contact us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Right Block */}
      <div className="flex gap-4 max-w-md items-start">
        {/* Vertical Line with Dots */}
        <div className="flex flex-col items-center pt-1">
          <div className="w-[1px] h-6 bg-white" />
          <div className="w-1 h-1 rounded-full bg-white mb-1" />
          <div className="w-[1px] h-6 bg-white" />
        </div>

        <p className="text-sm md:text-base leading-relaxed text-white">
          What will your ideal workspace, retail, or hospitality setting look like?<br />
          Let’s bring your company’s project to life — together.
        </p>
      </div>
    </div>
  );
};

export default BusinessCTASection;
