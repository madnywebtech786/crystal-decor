import Image from 'next/image';
import React from 'react';
import SectionDivider from '../components/SectionDivider';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    imageSrc: '/images/services/service1.png',
    title: 'Flower Design',
    description:
      'Exquisite floral arrangements, from bridal bouquets to venue décor, crafted to complement your theme beautifully.',
  },
  {
    imageSrc: '/images/services/service2.png',
    title: 'Photoshoot',
    description:
      'Capture timeless moments with our professionally styled wedding photoshoot setups.',
  },
  {
    imageSrc: '/images/services/service3.png',
    title: 'Wedding Coordination',
    description:
      'We handle all the details—venue setup, guest management, and seamless event flow—so you can relax and enjoy your day.',
  },
  {
    imageSrc: '/images/services/service4.png',
    title: 'Wedding Cake',
    description:
      'Custom-designed wedding cakes that taste as incredible as they look, perfectly matching your theme and style.',
  },
  {
    imageSrc: '/images/services/service5.png',
    title: 'Catering',
    description:
      'Delicious, customized menus that delight your guests, from appetizers to full-course meals.',
  },
  {
    imageSrc: '/images/services/service6.png',
    title: 'Decor',
    description:
      'Stunning venue decorations, including elegant table settings, luxurious drapery, and ambient lighting, to create the perfect atmosphere.',
  },
];

export default function Services() {
  return (
    <div className='flex flex-col p-4 md:p-8 lg:p-12 2xl:p-20 relative services'>
      <div className='flex justify-center gap-3 flex-col w-full text-center text-white'>
        <h2 className='fancy-text text-lg '>Our Services</h2>
        <SectionDivider className='mx-auto' />
        <h3 className='text-4xl font-bold'>Complete Wedding Planning</h3>
      </div>

      <div class='py-10 flex flex-wrap'>
        {services.map((service, index) => (
          <div className='w-full md:w-1/2 xl:w-1/3 p-3' key={'service '+index}>
            <ServiceCard
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
