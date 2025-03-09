import React from 'react';
import GallerySlider from '../components/GallerySlider';
import Breadcrumb from '../components/Breadcrumb';

export default function Projects() {
  // Define city-based images (could be fetched from an API)
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
    

  return (
    <div>
        <Breadcrumb name={'Our Projects'} />

      {Object.keys(cityImages).map((city) => (
        <GallerySlider
          key={city}
          images={cityImages[city]}
          cityName={city.charAt(0).toUpperCase() + city.slice(1)} // Capitalize first letter
        />
      ))}
    </div>
  );
}
