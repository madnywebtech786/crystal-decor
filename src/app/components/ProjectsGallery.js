'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import SectionDivider from './SectionDivider';
import Lightbox from './Lightbox';

export default function ProjectsGallery({ name, images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className='p-4 lg:px-0 py-8 lg:py-12'>
      <div className='flex justify-center gap-3 flex-col w-full text-center'>
        <h2 className='fancy-text text-lg text-primary'>Our Gallery</h2>
        <SectionDivider className='mx-auto' />
        <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>{name}</h3>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-8'>
        {images.map((image, index) => (
          <button
            type='button'
            key={image.src}
            onClick={() => setActiveIndex(index)}
            className='relative aspect-square w-full rounded-lg overflow-hidden group cursor-pointer'
          >
            <Image
              src={image.src}
              alt={`${name} project ${index + 1}`}
              fill
              loading='lazy'
              sizes='(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw'
              className='object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images.map((image) => image.src)}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </div>
  );
}
