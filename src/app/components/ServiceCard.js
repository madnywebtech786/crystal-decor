import Image from 'next/image';
import React from 'react';

export default function ServiceCard({ imageSrc, title, description }) {
  return (
    <div className='bg-white flex flex-col rounded-lg group h-full  relative'>
      <div className='overflow-hidden relative pb-10'>
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={500}
          className='w-full h-[270px] object-cover group-hover:scale-105 duration-300 rounded-tr-lg rounded-tl-lg'
        />

        <div className='bg-black rounded-lg absolute bottom-2 left-2 p-2'>
        <Image
          src={`/images/icons/${title}.svg`}
          alt={title+' icon'}
          width={50}
          height={50}
          className=''
        />

        </div>
      </div>
      <div className='flex flex-col gap-3 p-4 pt-2 pb-16'>
        <h2 className='text-2xl font-bold '>{title}</h2>
        <p className='text-sm text-gray-400'>{description}</p>
      </div>

      <button className='text-white bg-black p-2 text-xs rounded-lg px-3 w-max absolute bottom-4 left-3'>
        Read more
      </button>
    </div>
  );
}
