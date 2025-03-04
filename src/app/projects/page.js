import React from 'react';
import GallerySlider from '../components/GallerySlider';
import Breadcrumb from '../components/Breadcrumb';

export default function Projects() {
  // Define city-based images (could be fetched from an API)
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
