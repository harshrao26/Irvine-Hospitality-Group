'use client';

import {
  FaRegFileAlt,
  FaCode,
  FaClipboardCheck,
  FaBed,
  FaMobileAlt,
  FaCogs,
  FaTruck,
  FaUserCog,
} from 'react-icons/fa';

const steps = [
  {
    id: '01',
    title: 'Proposal Development',
    icon: <FaRegFileAlt className="text-white text-2xl" />,
    color: 'bg-[#0056A3]',
  },
  {
    id: '02',
    title: 'Design Specification',
    icon: <FaCode className="text-white text-2xl" />,
    color: 'bg-[#F26522]',
  },
  {
    id: '03',
    title: 'Approval Process',
    icon: <FaClipboardCheck className="text-white text-2xl" />,
    color: 'bg-[#FFC107]',
  },
  {
    id: '04',
    title: 'Prototype Development',
    icon: <FaBed className="text-white text-2xl" />,
    color: 'bg-[#003F7D]',
  },
  {
    id: '05',
    title: 'Material Procurement',
    icon: <FaMobileAlt className="text-white text-2xl" />,
    color: 'bg-[#E8501D]',
  },
  {
    id: '06',
    title: 'Production & Quality Check',
    icon: <FaCogs className="text-white text-2xl" />,
    color: 'bg-[#D19E00]',
  },
  {
    id: '07',
    title: 'Shipping & Delivery',
    icon: <FaTruck className="text-white text-2xl" />,
    color: 'bg-[#1F77C0]',
  },
  {
    id: '08',
    title: 'Post-Delivery Support',
    icon: <FaUserCog className="text-white text-2xl" />,
    color: 'bg-[#F26522]',
  },
];

export default function ProcessTimeline() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-y-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center relative w-1/2 sm:w-1/4 px-2"
            >
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full ${step.color} shadow-lg mb-4`}
              >
                {step.icon}
              </div>
              <p className="text-sm font-bold mb-1" style={{ color: step.color.replace('bg-', '#') }}>
                {step.id}
              </p>
              <p className="text-sm text-gray-700 font-medium">{step.title}</p>
              {/* {idx !== steps.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-10 w-full h-1 border-b border-dashed border-gray-300 z-0" />
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
