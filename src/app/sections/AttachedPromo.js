import Link from 'next/link';
import React from 'react';

export default function AttachedPromo() {
  return (
    <div className='flex items-center px-4 lg:px-0 py-20 attached-promo flex-col lg:flex-row'>
      <div className='w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0'>
      <p className='text-3xl md:text-5xl text-white font-bold text-center !leading-tight'>
      Make your Wedding <span className='fancy-text text-4xl md:text-6xl text-black'> Memorable</span> With Us
      </p>
      </div>
      <div className='w-full lg:w-1/2 flex justify-center items-center'>
      <Link href={'#contact'}>
      <button className='bg-white rounded-lg p-4 text-secondary w-max mx-auto text-lg md:text-2xl font-bold'>Book Now</button>
      </Link>
      </div>
      
    </div>
  );
}
