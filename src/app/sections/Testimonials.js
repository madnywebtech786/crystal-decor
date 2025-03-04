'use client';
import React from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestimonialCard from '../components/TestimonialCard';
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Aisha & Ryan',
      desc: 'Crystal Decor made our wedding absolutely magical! The floral designs and decorations were breathtaking, and the coordination was flawless. Everything was beyond perfect!',
    },
    {
      name: 'Emily & Daniel',
      desc: 'From the elegant décor to the delicious catering and a show-stopping wedding cake, Crystal Decor made our dream wedding come true. Highly recommended!',
    },
  ];
  return (
    <div className='flex p-4 md:p-8 lg:p-12 2xl:p-10 testimonials relative flex-col-reverse lg:flex-row'>
      <div className='w-full lg:w-1/2 lg:p-5 xl:p-10 '>
        <div className='flex flex-col gap-3'>
          <h2 className='text-sm md:text-base lg:text-lg text-bg-white fancy-text text-primary'>
            Voices of Trust
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            The Difference We Make for Our Clients
          </h3>
        </div>
        <div className='flex justify-end'>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            draggable
            autoHeight
            autoplay={{ delay: 5000 }}
            loop={true}
            className='!h-auto mt-5 w-full lg:w-11/12 '
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  name={testimonial.name}
                  desc={testimonial.desc}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='w-full lg:w-1/2 my-5 lg:my-0'>
        <Image
          src={'/images/testside.png'}
          alt='testimonial side img'
          width={1000}
          height={1000}
          className='h-full w-full rounded-lg'
        />
      </div>
    </div>
  );
}
