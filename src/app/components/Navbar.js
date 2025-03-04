'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '../sections/TopBar';
import Button from './Button';

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Change when scrolling past 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const toggleAccordion = (accordionIndex) => {
    setActiveAccordion((prev) =>
      prev === accordionIndex ? null : accordionIndex
    );
  };

  const closeMobileNav = () => {
    if (activeAccordion === 1) {
      toggleAccordion(1);
    }
    setIsMobileNavOpen(false); // Close the mobile nav when a link is clicked
  };

  return (
    <>
      <TopBar />
      <nav
        className={`sticky top-0 z-50 shadow-md px-4 md:px-8 lg:px-12 2xl:px-20 py-1 transition-colors duration-300 ${
          isSticky ? 'bg-black text-white' : 'bg-white text-primaryDark'
        }`}
      >
        <div className='container mx-auto lg:px-4 flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='text-base font-bold'>
            <Link href='/'>
              <Image
                src={isSticky?'/images/logoWhiteTr.png' :'/images/logo.svg'}
                width={200}
                height={200}
                alt='Crystal Decor Logo'
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className='hidden xl:flex items-center space-x-8 text-base'>
            <Link href='/' className=' py-3 underline-animation'>
              Home
            </Link>
            <Link href='/about-us' className='py-3 underline-animation'>
              About Us
            </Link>

            <Link href='/services' className='py-3 underline-animation'>
              Our Services
            </Link>
            <Link href='/products' className='py-3 underline-animation'>
              Our Products
            </Link>
            <div className='relative group menu'>
              <div className='flex items-center'>
                <Link href='/about-us' className=' flex items-center py-3 '>
                  Planning
                  <span className='ml-2 transition-transform transform group-hover:rotate-180'>
                    <Image
                      src='/images/icons/ArrowDownWhite.svg'
                      alt='arrow img'
                      width={13}
                      height={13}
                    />
                  </span>
                </Link>
              </div>

              {/* Dropdown Menu */}
              <div className='dropdown-menu text-sm'>
                <Link
                  href='/planning/weddings'
                  className='block px-4 py-2 hover:bg-primaryLight capitalize rounded-t-md'
                >
                  weddings
                </Link>
                <Link
                  href='/planning/corporate-events'
                  className='block px-4 py-2 hover:bg-primaryLight capitalize border-y'
                >
                  corporate events
                </Link>
                <Link
                  href='/planning/birthdays'
                  className='block px-4 py-2 hover:bg-primaryLight capitalize border-y'
                >
                  birthdays
                </Link>
                <Link
                  href='/planning/video-&-photography'
                  className='block px-4 py-2 hover:bg-primaryLight capitalize border-y'
                >
                  Video & photography
                </Link>
                <Link
                  href='/planning/decor'
                  className='block px-4 py-2 hover:bg-primaryLight capitalize border-y'
                >
                  decor
                </Link>
                <Link
                  href='/planning/others'
                  className='block px-4 py-2 hover:bg-primaryLight capitalize rounded-b-md'
                >
                  others
                </Link>
              </div>
            </div>

            <Link href='/projects' className=' py-3 underline-animation'>
              Projects
            </Link>

            <Link href='/contact-us' className=' py-3 underline-animation'>
              Contact Us
            </Link>
            <div className='hidden xl:flex'>
              <Link href='/contact-us'>
                <Button
                  text={'Book Now'}
                  className='px-4 py-3 '
                  isSticky={isSticky}
                />
              </Link>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className='xl:hidden'>
            <button onClick={toggleMobileNav}>
              <span className='text-2xl'>&#9776;</span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 max-h-screen overflow-scroll ${
            isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className='flex justify-end p-4'>
            <button onClick={toggleMobileNav} className='text-2xl text-black'>
              &times;
            </button>
          </div>

          {/* Mobile Links */}
          <div className='flex flex-col items-center text-black px-4'>
            <Link
              href='/'
              className='text-base font-medium border-b w-full text-start py-2'
              onClick={closeMobileNav}
            >
              Home
            </Link>
            <Link
              href='/about-us'
              className='text-base font-medium border-b w-full text-start py-2'
              onClick={closeMobileNav}
            >
              About Us
            </Link>
            <Link
              href='/services'
              className='text-base font-medium border-b w-full text-start py-2'
              onClick={closeMobileNav}
            >
              Our Services
            </Link>
            <Link
              href='/products'
              className='text-base font-medium border-b w-full text-start py-2'
              onClick={closeMobileNav}
            >
              Our Products
            </Link>

            <div className='w-full mobile-menu'>
              {/* Planning Accordion */}
              <button
                onClick={() => toggleAccordion(3)}
                className='text-base font-medium w-full text-left py-3 border-b flex justify-between items-center my-2'
              >
                Planning
                <Image
                  src='/images/icons/ArrowDown.svg'
                  alt='arrow'
                  width={13}
                  height={13}
                  className={`transform transition-transform ${
                    activeAccordion === 3 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 3 ? 'max-h-80' : 'max-h-0'
                }`}
                style={{
                  transitionProperty: 'max-height',
                }}
              >
                <div className='flex flex-col bg-primaryExtraLight text-base rounded-lg'>
                  <Link
                    href='/planning/weddings'
                    className='block px-4 py-3 '
                    onClick={closeMobileNav}
                  >
                    Weddings
                  </Link>
                  <Link
                    href='/planning/corporate-events'
                    className='block px-4 py-3 '
                    onClick={closeMobileNav}
                  >
                    Corporate Events
                  </Link>
                  <Link
                    href='/planning/birthdays'
                    className='block px-4 py-3 '
                    onClick={closeMobileNav}
                  >
                    Birthdays
                  </Link>
                  <Link
                    href='/planning/video-&-photography'
                    className='block px-4 py-3 '
                    onClick={closeMobileNav}
                  >
                    Video & Photography
                  </Link>
                  <Link
                    href='/planning/decor'
                    className='block px-4 py-3 '
                    onClick={closeMobileNav}
                  >
                    Decor
                  </Link>
                  <Link
                    href='/planning/others'
                    className='block px-4 py-3 '
                    onClick={closeMobileNav}
                  >
                    Others
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href='/projects'
              className='text-base font-medium border-b w-full text-start py-2'
              onClick={closeMobileNav}
            >
              Projects
            </Link>
            <Link
              href='/contact-us'
              className='text-base font-medium border-b w-full text-start py-3'
              onClick={closeMobileNav}
            >
              Contact Us
            </Link>
            <Link
              href='/contact-us'
              className='w-full flex justify-center'
              onClick={closeMobileNav}
            >
              <Button
                className='p-3 !w-2/3 my-10 mx-auto !text-lg  bg-secondary text-white capitalize font-bold'
                text={'Book Now'}
              />
            </Link>
          </div>

          {/* Social Links */}
          <div className='absolute bottom-4 w-full flex justify-center space-x-6 px-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80'
            >
              <img
                src='/images/icons/FacebookIcon.svg'
                alt='Facebook'
                className='h-6 w-6'
              />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80'
            >
              <img
                src='/images/icons/XIcon.svg'
                alt='Twitter'
                className='h-6 w-6'
              />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80'
            >
              <img
                src='/images/icons/InstaIcon.svg'
                alt='Instagram'
                className='h-6 w-6'
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
