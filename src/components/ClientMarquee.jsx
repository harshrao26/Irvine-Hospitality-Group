"use client";

import React from "react";
// import cloudinary from "../assets/cloudinary.png";
// import meta from "../assets/meta.png";
// import paytm from "../assets/paytm.png";
// import gp from "../assets/gp.png";
// import aws from "../assets/aws.png";
const ClientMarquee = () => {
  const logos = [
    "https://i.pinimg.com/736x/50/a3/30/50a3300a69a61a1af350f03922392c9f.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/tata-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/sbi-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hdfc-bank-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/airtel-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hindustan-unilever-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/Dabur-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/dlf-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/bank-of-baroda-logo-design.jpg",

   
    "https://i.pinimg.com/736x/50/a3/30/50a3300a69a61a1af350f03922392c9f.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/tata-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/sbi-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hdfc-bank-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/airtel-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hindustan-unilever-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/Dabur-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/dlf-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/bank-of-baroda-logo-design.jpg",

   
    "https://i.pinimg.com/736x/50/a3/30/50a3300a69a61a1af350f03922392c9f.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/tata-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/sbi-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hdfc-bank-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/airtel-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/hindustan-unilever-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/Dabur-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/dlf-logo-design.jpg",
    "https://animationvisarts.com/wp-content/uploads/2016/10/bank-of-baroda-logo-design.jpg",

   
  ];

  return (
    <div className="  bg-[002C52] my-16">
      <div className="  overflow-hidden max-w-7xl py-8 mx-auto">
         

        <div className="text-center mb-14">
          
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
           Our Associates and Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer seamless and specialized business solutions across various sectors, supporting ease of doing business and promoting entrepreneurship in India.
          </p>
        </div>

        {/* Marquee Row 1 */}
        {/* <div className="overflow-hidden whitespace-nowrap mb-6">
        <div className="inline-block animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`top-${index}`}
              src={` ${logo}`}
              alt="client"
                  className="h-16 sm:h-24 md:h-28 lg:h-32 mx-4 sm:mx-6 inline-block transition"
            />
          ))}
        </div>
      </div> */}

        {/* Marquee Row 2 (reverse direction) */}
        <div className="overflow-hidden whitespace-nowrap mb-6">
          <div className="inline-block animate-marquee-reverse ">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={`top-${index}`}
                src={` ${logo}`}
                alt="client"
                className="h-16 sm:h-24   transition duration-300 mx-4 sm:mx-6 inline-block"
              />
            ))}
          </div>
        </div>
        {/* Marquee Row 1 */}
        {/* <div className="overflow-hidden whitespace-nowrap mb-6">
        <div className="inline-block animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`top-${index}`}
              src={` ${logo}`}
              alt="client"
                  className="h-16 sm:h-24 md:h-28 lg:h-32 mx-4 sm:mx-6 inline-block transition"
            />
          ))}
        </div>
      </div> */}

        {/* Marquee Row 2 (reverse direction) */}
        {/* <div className="overflow-hidden whitespace-nowrap mb-6">
        <div className="inline-block animate-marquee-reverse ">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`top-${index}`}
              src={` ${logo}`}
              alt="client"
                  className="h-16 sm:h-24 md:h-28 lg:h-32 mx-4 sm:mx-6 inline-block transition"
            />
          ))}
        </div>
      </div> */}

        {/* Inline CSS for animation */}
        <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 90s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 90s linear infinite;
        }
      `}</style>
      </div>
    </div>
  );
};

export default ClientMarquee;
