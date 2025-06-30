'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { number: 500, suffix: '+', label: 'Products' },
  { number: 20, suffix: '+', label: 'Projects' },
  { number: 50, suffix: '+', label: 'Satisfied Customers' },
  { number: 1, suffix: 'st', label: 'Top 1 in Paris' },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="bg-[#002C52] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, idx) => (
          <div key={idx}>
            <h3 className="text-4xl font-semibold text-white">
              {inView ? (
                <CountUp end={item.number} duration={2} suffix={item.suffix} />
              ) : (
                '0' + item.suffix
              )}
            </h3>
            <p className="text-gray-200 text-sm mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
