'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import SectionDivider from '../components/SectionDivider';

export default function Gallery() {
  return (
    <div className=' p-4 lg:px-0 md:py-8 lg:py-12 2xl:py-20'>
      <div className='flex justify-center gap-3 flex-col w-full text-center'>
        <h2 className='fancy-text text-lg text-primary'>Our Gallery</h2>
        <SectionDivider className='mx-auto' />
        <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
          Complete Wedding Planning
        </h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={8}
        slidesPerView={1}
        draggable
        autoplay={{ delay: 5000 }}
        loop={true}
        breakpoints={{
          // For screens >= 640px (Tablet)
          760: {
            slidesPerView: 2, // Show 4 slides on tablet
          },
          // For screens >= 1024px (Laptop and above)
          1024: {
            slidesPerView: 2, // Show 7 slides on laptop and above
          },
          1240: {
            slidesPerView: 3, // Show 7 slides on laptop and above
          },
        }}
        className='h-[400px] lg:!h-[600px] z-10 py-5 my-10'
      >
        <SwiperSlide className='cursor-grab '>
          <div className='w-full h-full'>
            <Image
              src='/images/long-img-1.webp'
              alt='gallery img 1'
              width={500}
              height={500}
              className='w-full h-full rounded-lg'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='cursor-grab '>
          <div className='w-full h-full flex flex-col gap-2 pb-2'>
            <Image
              src='/images/slide1.webp'
              alt='gallery img 1'
              width={500}
              height={500}
              className='w-full h-1/2 rounded-lg'
            />
            <Image
              src='/images/wedding-slide1.webp'
              alt='gallery img 1'
              width={500}
              height={500}
              className='w-full h-1/2 rounded-lg'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='cursor-grab '>
          <div className='w-full h-full'>
            <Image
              src='/images/long-img-2.webp'
              alt='gallery img 1'
              width={500}
              height={500}
              className='w-full h-full rounded-lg'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='cursor-grab '>
          <div className='w-full h-full flex flex-col gap-2 pb-2'>
            <Image
              src='/images/wedding-slide1.webp'
              alt='gallery img 1'
              width={500}
              height={500}
              className='w-full h-1/2 rounded-lg'
            />
            <Image
              src='/images/slide1.webp'
              alt='gallery img 1'
              width={500}
              height={500}
              className='w-full h-1/2 rounded-lg'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
