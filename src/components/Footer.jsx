import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#002C52] text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Left Logo + Description */}
        <div className="space-y-6">
          <div className="w-10">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          </div>
          <p className="text-sm">
            Experts in consulting, design & build, FF&E, and post occupancy
            maintenance right by your side.
          </p>
          <a href="#" className="inline-block text-white">
            <FaLinkedinIn className="bg-white text-[#002C52] p-1 w-6 h-6 rounded" />
          </a>
        </div>

        {/* Middle Dropdown */}
        <div>
          <h4 className="font-semibold uppercase text-sm mb-4">
  AROUND THE WORLD
          </h4>
          <div className="relative w-fit">
            <select className="bg-[#002C52] border border-gray-300 rounded-full px-6 py-2 pr-10 appearance-none">
              <option>Explore</option>
              <option>India</option>
              <option>Europe</option>
              <option>USA</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              ▼
            </div>
          </div>
        </div>

        {/* Link Column */}
        <div>
          <h4 className="font-semibold uppercase text-sm mb-4">Irvine Hospitality Group</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About us</a></li>
            <li><a href="#">Join us</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold uppercase text-sm mb-4">CONTACT US</h4>
          <ul className="space-y-2 text-sm not-italic">
            <li>Irvine Hospitality Group, Inc.</li>
            <li>2618 San Miguel Drive</li>
            <li>Unit 1214</li>
            <li>Newport Beach, CA 92660</li>
            <li>1-818-430-3411</li>
            <li>
              <a href="mailto:SALES@IHGFFE.COM" className="underline">
                SALES@IHGFFE.COM
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      <p className='text-[150px] w-full text-center font-extrabold'>
          Irvine Hospitality
          {/*  Group Inc. */}
        </p>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 space-y-4 md:space-y-0">
        <p>© 2025 Irvine Hospitality Group Inc.</p>
        <div className="space-x-6">
          <a href="#">Cookies</a>
          <a href="#">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
