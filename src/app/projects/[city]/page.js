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
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
    ],
    Calgary: [
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
    ],
    Chesteremere: [
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
    ],
    Cochrane: [
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
    ],
    Strathmore: [
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
    ],
    Highriver: [
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
    ],
    Okotoks: [
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
    ],
    Edmonton: [
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
      '/images/wedding-slide1.webp',
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
