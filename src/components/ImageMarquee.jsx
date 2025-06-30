'use client';

import Image from 'next/image';
import i1 from '@/assets/home-images/i1.png';
import i2 from '@/assets/home-images/i2.png';
import i3 from '@/assets/home-images/i3.png';
import i4 from '@/assets/home-images/i4.png';
import i5 from '@/assets/home-images/i5.png';
import i6 from '@/assets/home-images/i6.png';
import i7 from '@/assets/home-images/i7.png';
import i8 from '@/assets/home-images/i8.png';
import i9 from '@/assets/home-images/i9.png';

const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i1, i2, i3, i4, i5, i6, i7, i8, i9, i1, i2, i3, i4, i5, i6, i7, i8, i9, i1, i2, i3, i4, i5, i6, i7, i8, i9,];

const ImageMarquee = () => {
  return (
    <div className="overflow-hidden w-full py-10 bg-white relative">
      <div className="flex gap-5 animate-marquee whitespace-nowrap">
        {images.concat(images).map((img, idx) => (
          <div key={idx} className="flex-shrink-0 w-[500px] h-80 transition-transform duration-300 hover:scale-110">
            <Image
              src={img}
              alt={`img-${idx}`}
              width={208}
              height={208}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Tailwind animation keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ImageMarquee;
