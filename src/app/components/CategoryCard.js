import Image from 'next/image';
import React from 'react';

export default function CategoryCard({ name, image ,onClick }) {
  return (
    <div className="cursor-pointer relative group mx-auto w-max border-2 border-primary rounded-full p-4 overflow-hidden" onClick={()=>{onClick(name)}} >
      {/* Image */}
      <Image
        src={image}
        alt={name}
        width={90}
        height={90}
        className="z-10 rounded-full"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
        <p className="text-white text-base font-medium">{name}</p>
      </div>
    </div>
  );
}
