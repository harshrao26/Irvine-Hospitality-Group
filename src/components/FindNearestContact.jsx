const FindNearestContact = () => {
  return (
    <div className="bg-[#002C52] w-full h-auto md:h-96 flex items-center justify-center relative px-6 py-12 md:py-0">
      {/* Content Wrapper */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text Block */}
        <div className="text-center md:text-left">
          <p className="text-sm text-[#fff] mb-2">
            We bring solutions wherever you are
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#fff] leading-tight mb-4">
            Find your nearest<br />Irvine contact
          </h2>
           
        </div>

        {/* CTA Button */}
        <button className="w-20 h-20 rounded-full bg-[#f99f34] shadow-xl flex items-center justify-center hover:scale-105 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
            className="w-6 h-6 rotate-45"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 7v10M7 17h10" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FindNearestContact;
