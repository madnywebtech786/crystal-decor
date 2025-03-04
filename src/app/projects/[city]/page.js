'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Breadcrumb from '../../components/Breadcrumb';
import GallerySlider from '@/app/components/GallerySlider';

export default function Projects() {
  const pathname = usePathname(); // Get the current pathname

  // Define city-based images (or could be fetched from an API)
  const cityImages = {
    Airdrie: [
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
    ],
    Calgary: [
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
    ],
    Chesteremere: [
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
    ],
    Cochrane: [
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
    ],
    Strathmore: [
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
    ],
    Highriver: [
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
    ],
    Okotoks: [
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
    ],
    Edmonton: [
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
      '/images/wedding-slide1.png',
    ]
  };

  // Check if there is a city in the pathname
  const cityMatch = pathname.split('/')[2]; // Assumes /projects/[city] pattern

  // Choose images based on the city from the URL
  const displayImages = cityMatch ? cityImages[cityMatch] || [] : images;

  return (
    <div>
      <Breadcrumb name={cityMatch ? `${cityMatch} Projects` : 'All Projects'} />
      <div className='gallery'>
        {displayImages.length > 0 ? (
          <GallerySlider images={displayImages} cityName={cityMatch} />
        ) : (
          <p>No projects available for this city.</p>
        )}
      </div>
    </div>
  );
}
