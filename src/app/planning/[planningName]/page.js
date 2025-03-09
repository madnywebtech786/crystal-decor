'use client';

import Breadcrumb from '@/app/components/Breadcrumb';
import Loader from '@/app/components/Loader';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { plannings } from '@/app/constants/planningData';
import Button from '@/app/components/Button';
import Link from 'next/link';

export default function Page() {
  const pathname = usePathname(); // Get the current pathname
  const [formattedPlanningName, setFormattedPlanningName] = useState('');
  const [planningData, setPlanningData] = useState(null);

  useEffect(() => {
    if (pathname) {
      // Extract the planningName from the pathname
      const planningName = pathname.split('/').pop(); // Get the last segment of the URL

      if (planningName) {
        // Replace "-" with spaces and capitalize the words
        const formattedName = planningName.replaceAll('-', ' ');
        setFormattedPlanningName(formattedName);
        setPlanningData(plannings[formattedName]);
      }
    }
  }, [pathname]);

  if (!pathname) {
    return <Loader />;
  }

  return (
    <div>
      <Breadcrumb name={formattedPlanningName} />

      <div className='flex p-4 py-8 md:p-8 lg:p-12 2xl:p-10 flex-col lg:flex-row items-center'>
        {/* Left: Image */}
        <div className='flex-shrink-0 w-full lg:w-1/2'>
          <img
            src={`/images/plannings/${formattedPlanningName}.webp`}
            alt={formattedPlanningName}
            className='w-full h-auto rounded-lg shadow-md max-h-[500px] object-cover'
          />
        </div>

        {/* Right: Service Details */}
        <div className='flex-grow lg:pl-8 mt-6 lg:mt-0'>
          <h2 className='text-bg-color text-sm md:text-base lg:text-lg font-bold '>
            Plan Now
          </h2>
          <h1 className='text-4xl text-primary font-bold my-5 uppercase'>
            {formattedPlanningName}
          </h1>
          <p className='text-lg leading-relaxed text-gray-600'>
            {planningData?.desc}
          </p>

          <Link href={'/contact-us'}>
            <Button text={'Get Free Quote'} className='px-4 py-3 my-4' />
          </Link>
        </div>
      </div>
    </div>
  );
}
