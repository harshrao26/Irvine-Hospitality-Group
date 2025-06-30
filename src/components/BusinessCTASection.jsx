"use client"

const BusinessCTASection = () => {

  return (
    <div className="bg-[#002C52] text-white py-20 px-10 md:px-20 flex flex-col md:flex-row justify-between items-center gap-10">
      
      {/* Left Block */}
      <div>
        <h2 className="text-3xl md:text-4xl font-light leading-snug max-w-xl">
          Your place of business <span className="font-bold">tailored to</span><br />
          <span className="font-bold">your challenges</span> and user needs.
        </h2>

        {/* CTA Button */}
        <button className="mt-6 bg-[#f99f34] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition">
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
      <div className="flex items-start gap-4 max-w-md">
        {/* Vertical Line with Dots */}
        <div className="flex flex-col items-center mt-2">
          <div className="w-[1px] h-6 bg-white"></div>
          <div className="w-1 h-1 rounded-full bg-white mb-1" />
          <div className="w-[1px] h-6 bg-white"></div>
        </div>

        <p className="text-sm leading-relaxed">
          What will your ideal work, retail, and hospitality spaces look like?<br />
          Let’s bring your company’s project to life together.
        </p>
      </div>
    </div>
  );
};

export default BusinessCTASection;
