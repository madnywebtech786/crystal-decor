import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export default function TopBar() {
  return (
    <div className='w-full py-2 px-4 md:px-8 lg:px-12 2xl:px-20 flex bg-secondary text-white '>
      <div className='w-full lg:w-1/2 flex justify-between md:justify-start md:gap-5 items-center'>
        <div className='flex gap-1 items-center'>
          <Image
            src={'/images/icons/SendWhite.svg'}
            alt='relaxing-Food-email'
            width={20}
            height={20}
          />
          <Link href={'mailto:info@crystaldecore.com'}></Link><p className='text-xs md:text-sm'> info@crystaldecore.com</p>
        </div>
        <div className='flex gap-1 items-center'>
          <Image
            src={'/images/icons/PhoneWhite.svg'}
            alt='relaxing-Food-phone'
            width={20}
            height={20}
          />
         <Link href={'tel:+14034026723'}> <p className='text-xs md:text-sm'>+1 (403) 402-6723</p></Link>
        </div>
      </div>
      <div className='w-1/2 hidden md:flex justify-end'>
        <div className='flex items-center space-x-4'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/images/icons/FacebookWhite.svg'
              alt='Facebook'
              className='h-6 w-6'
            />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/images/icons/Xwhite.svg'
              alt='Twitter'
              className='h-6 w-6'
            />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/images/icons/InstaWhite.svg'
              alt='Instagram'
              className='h-6 w-6'
            />
          </a>
        </div>
      </div>
    </div>
  );
}
