'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import Image from 'next/image';

const GallerySlider = ({ images , cityName }) => {
  return (
    <div className="p-4 lg:px-0 md:py-8 lg:py-12 2xl:py-10">
      <div className="flex justify-center gap-3 flex-col w-full text-center">
        <h2 className="fancy-text text-lg text-primary">Our Gallery</h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
         Projects for {cityName}
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
          760: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1240: { slidesPerView: 3 },
        }}
        className="h-[400px] lg:!h-[600px] z-10 py-5 my-10"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="cursor-grab">
            {index % 2 === 0 ? (
              // Single Image Slide
              <div className="w-full h-full">
                <Image
                  src={image}
                  alt={`gallery img ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full rounded-lg"
                />
              </div>
            ) : (
              // Double Image Slide
              <div className="w-full h-full flex flex-col gap-2 pb-2">
                <Image
                  src={image}
                  alt={`gallery img ${index + 1}-1`}
                  width={500}
                  height={500}
                  className="w-full h-1/2 rounded-lg"
                />
                {images[index + 1] && (
                  <Image
                    src={images[index + 1]}
                    alt={`gallery img ${index + 1}-2`}
                    width={500}
                    height={500}
                    className="w-full h-1/2 rounded-lg"
                  />
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
