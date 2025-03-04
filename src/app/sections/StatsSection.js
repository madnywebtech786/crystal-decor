'use client';
import React, { useEffect, useRef, useState } from 'react';
import Counter from './CounterPart'; // Import the Counter component

const StatsSection = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const stats = [
    {
      value: 1200,
      label: 'Happy Couples',
      symbol: '+',
      animation: 'fade-up',
    },
    {
      value: 1545,
      label: 'Weddings',
      symbol: '+',
      animation: 'fade-down',
    },
    {
      value: 750,
      label: 'Decorations',
      symbol: '%',
      animation: 'fade-up',
    },
    {
      value: 265,
      label: 'Locations',
      symbol: '+',
      animation: 'fade-down',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className='my-20 lg:my-0 py-10 mx-4 md:mx-8 lg:mx-12 xl:mx-20 bg-white rounded-lg shadow-xl'
    >
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 '>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-8 flex flex-col items-center text-center  border-r-2 border-gray-200 ${
              index === 0 ? 'rounded-tl-xl rounded-bl-xl' : ''
            } ${
              index === stats.length - 1 ? 'rounded-tr-xl rounded-br-xl  !border-r-0' : ''
            }`}
            data-aos={stat.animation}
            data-aos-delay={index * 100}
          >
            <h3 className='text-4xl font-bold text-primaryLight'>
              {stat.prefix || ''}
              <Counter endValue={stat.value} start={startCounting} />
              {stat.symbol || ''}
            </h3>
            <p className='mt-2 text-black font-bold'>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
