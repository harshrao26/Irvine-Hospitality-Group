const FindNearestContact = () => {
  return (
    <div className="bg-[#c6d7e3] w-full h-96 flex items-center justify-center relative px-6">
      {/* Content Wrapper */}
      <div className="max-w-7xl w-full flex justify-between items-center relative">
        {/* Text Block */}
        <div>
          <p className="text-sm text-[#082135] mb-2">
            Our first service is to be where you are
          </p>
          <h2 className="text-5xl font-light text-[#082135] leading-tight mb-4">
            Find your nearest<br />contact
          </h2>
          <div className="w-10 h-[2px] bg-[#082135] mt-2 relative">
            <span className="absolute left-0 w-1 h-1 bg-[#082135] top-[-4px] rounded-full" />
            <span className="absolute right-0 w-1 h-1 bg-[#082135] top-[-4px] rounded-full" />
          </div>
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
