import Image from 'next/image';
import React from 'react';
import Button from '../components/Button';

export default function AboutUs({ pageType = 'landingPage' }) {
  const content = {
    landingPage: {
      smallHeading: 'Hi, Meet Dreams',
      largeHeading: 'Your Advanced and Number One Wedding Planner',
      paragraph: `At Crystal Decor, we turn wedding dreams into reality with our expert decoration and planning services. With years of experience in crafting breathtaking wedding venues, we specialize in elegant floral arrangements, stunning décor, seamless coordination, and unforgettable dining experiences. From intimate gatherings to grand celebrations, our team is dedicated to creating a magical atmosphere that reflects your love story.`,
    },
    exterior: {
      smallHeading: 'Welcome to Perfection',
      largeHeading: 'Creating Magical Weddings with Elegance',
      paragraph: `At Crystal Decor, we believe that every love story deserves a beautiful setting. With a passion for design and an 
eye for detail, we specialize in transforming wedding venues into breathtaking spaces that leave lasting 
impressions. From stunning floral arrangements to elegant décor, seamless coordination, and exquisite catering, 
we handle every element to make your big day stress-free and unforgettable.`,
    },
  };
  const { smallHeading, largeHeading, paragraph } = content[pageType];

  return (
    <div className='flex p-4 md:p-8 lg:p-12 2xl:p-20 relative flex-col lg:flex-row'>
      <Image
        src={'/images/sideshapeleft.webp'}
        alt='style img'
        width={400}
        height={400}
        className='w-1/6 absolute bottom-1/3 left-0 opacity-25 floating'
      />
      <Image
        src={'/images/sideshaperight.webp'}
        alt='style img'
        width={400}
        height={400}
        className='w-1/6 absolute bottom-0 right-0 opacity-25 floating'
      />
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        <h2 className='fancy-text text-lg text-primary'>{smallHeading}</h2>
        <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          {largeHeading}
        </h3>
        <p className='w-full lg:w-2/3'>{paragraph}</p>

        <Button className='p-3 lg:p-4 px-4 lg:px-6' text={'Learn More'} />
      </div>
      <div className='w-full lg:w-1/2 relative flex justify-center my-5 lg:my-0'>
        <div className='w-2/3 relative h-full'>
          <Image
            src={'/images/about-side.webp'}
            alt='decorative img'
            width={410}
            height={560}
            className='w-full'
          />
          <Image
            src={'/images/couple-sidemain.webp'}
            alt='decorative img'
            width={410}
            height={560}
            className='w-2/3 absolute top-1/4 -right-1/4 floating'
          />
        </div>

        <Image
          src={'/images/couple-side.webp'}
          alt='decorative img'
          width={410}
          height={560}
          className='w-2/5 lg:w-3/5 absolute bottom-0 lg:-bottom-8 xl:bottom-0 -left-5 lg:-left-1/4 xl:-left-1/4 floating'
        />
      </div>
    </div>
  );
}
