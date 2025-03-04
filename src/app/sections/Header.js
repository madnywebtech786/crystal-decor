'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import './styles/Header.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
export default function Header() {
  return (
    <div className='w-full relative'>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        draggable
        autoplay={{ delay: 5000 }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className='h-[550px] lg:!h-[700px] z-10'
      >
        <SwiperSlide>
          <div className='w-full h-full  flex items-center slide1Bg'>
            <div className='w-full xl:w-2/3 h-full flex py-32 xl:py-0 xl:items-center justify-center px-4 '>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20  md:w-11/12 lg:w-4/5'>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-6 '>
                  <h3 className='text-3xl md:text-4xl lg:text-7xl font-extrabold text-white leading-snug uppercase '>
                    Enchanting Wedding Decor
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-4/5 md:w-2/3'>
                    Transform your wedding venue into a breathtaking masterpiece
                    with our expert decoration services.
                  </p>
                </div>
                <button className='bg-white rounded-full p-2 lg:p-3 px-4 lg:px-6 w-max text-xxs lg:text-sm font-semibold uppercase'>
                  Contact Now
                </button>
              </div>
            </div>
            <div className='hidden xl:w-1/3'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full  flex items-center slide2Bg'>
            <div className='w-full xl:w-2/3 h-full flex py-32 xl:py-0 xl:items-center justify-center px-4 '>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20  md:w-11/12 lg:w-4/5'>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-6 '>
                  <h3 className='text-3xl md:text-4xl lg:text-7xl font-extrabold text-white leading-snug uppercase '>
                    Floral Elegance for Your Big Day
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-4/5 md:w-2/3'>
                    Stunning flower arrangements that add charm, romance, and
                    sophistication to your wedding.
                  </p>
                </div>
                <button className='bg-white rounded-full p-2 lg:p-3 px-4 lg:px-6 w-max text-xxs lg:text-sm font-semibold uppercase'>
                  Call Now
                </button>
              </div>
            </div>
            <div className='hidden xl:w-1/3'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full  flex items-center slide3Bg'>
            <div className='w-full xl:w-2/3 h-full flex py-32 xl:py-0 xl:items-center justify-center px-4 '>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20  md:w-11/12 lg:w-4/5'>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-6 '>
                  <h3 className='text-3xl md:text-4xl lg:text-7xl font-extrabold text-white leading-snug uppercase '>
                    Seamless <br/> Coordination
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-4/5 md:w-2/3'>
                    From planning to execution, we handle every detail so you
                    can enjoy your special day stress-free.
                  </p>
                </div>
                <button className='bg-white rounded-full p-2 lg:p-3 px-4 lg:px-6 w-max text-xxs lg:text-sm font-semibold uppercase'>
                  Get Free Quote
                </button>
              </div>
            </div>
            <div className='hidden xl:w-1/3'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full  flex items-center slide4Bg'>
            <div className='w-full xl:w-2/3 h-full flex py-32 xl:py-0 xl:items-center justify-center px-4 '>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20  md:w-11/12 lg:w-4/5'>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-6 '>
                  <h3 className='text-3xl md:text-4xl lg:text-7xl font-extrabold text-white leading-snug uppercase '>
                    A Celebration to Remember
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-4/5 md:w-2/3'>
                    Exquisite décor, delicious catering, and a dreamy wedding
                    cake—all tailored to perfection.
                  </p>
                </div>
                <button className='bg-white rounded-full p-2 lg:p-3 px-4 lg:px-6 w-max text-xxs lg:text-sm font-semibold uppercase'>
                  Call 403-361-4968
                </button>
              </div>
            </div>
            <div className='hidden xl:w-1/3'></div>
          </div>
        </SwiperSlide>

        <div className='swiper-button-next !hidden md:!block'></div>
        <div className='swiper-button-prev !hidden md:!block'></div>
      </Swiper>

      <Image
        src={'/images/svg.png'}
        alt='wave'
        width={800}
        height={400}
        className='absolute bottom-0 left-0 z-20 w-full h-40'
      />
    </div>
  );
}
