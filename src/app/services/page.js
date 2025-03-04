import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Image from 'next/image';
import { services } from '../constants/servicesData';
import ServiceSectionCard from '../components/ServiceSectionCard';
import SectionDivider from '../components/SectionDivider';

export default function page() {
  return (
    <div>
      <Breadcrumb name='Our Services' />
      <div className='flex justify-center gap-3 flex-col w-full text-center text-black py-8'>
        <h2 className='fancy-text text-xl '>Our Services</h2>
        <SectionDivider className='mx-auto' />
        <h3 className='text-4xl font-bold'>Making Every Moment Magical</h3>
      </div>
      <div className='flex p-4 py-8 md:p-8 lg:p-12 2xl:p-10 flex-col lg:flex-row items-stretch'>
        <div className='flex flex-col gap-8'>
          {Object.keys(services).map((key, index) => (
            <ServiceSectionCard key={index} name={key} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
