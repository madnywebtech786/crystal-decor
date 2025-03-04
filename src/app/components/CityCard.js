import Image from 'next/image';
import React from 'react';

export default function CityCard({ name = '', src = '' }) {
  return (
    <div className='rounded-lg border border-gray-100 relative mt-10'>
      <Image
        src={src}
        alt={name + ' city'}
        width={400}
        height={250}
        className='w-[400px] h-[250px] rounded-lg'
      />

      <div className='bg-primary text-white rounded-2xl absolute left-1/4 -bottom-5 p-3 w-1/2 text-center capitalize'>
        <h3 className='text-base font-semibold'>{name}</h3>
      </div>
    </div>
  );
}
