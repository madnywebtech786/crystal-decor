import Image from 'next/image';
import React from 'react';

export default function TestimonialCard({ desc, name }) {
  return (
    <div className='bg-white rounded-lg m-4 border-2 border-primaryLight p-4 relative cursor-grab'>
      <Image
        src='/images/testleft2.webp'
        alt='decorative left'
        width={100}
        height={100}
        className='absolute top-0 left-0'
      />
      <Image
        src='/images/testright2.webp'
        alt='decorative right'
        width={100}
        height={100}
        className='absolute bottom-0 right-0'
      />
      <div className='p-10 px-8 flex flex-col gap-5'>
        <p className='text-primary text-sm md:text-base'>
          {desc}
        </p>

        <div className='flex w-full items-center gap-5'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-base lg:text-lg font-bold'>{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
