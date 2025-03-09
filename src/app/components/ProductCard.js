import Image from 'next/image';
import React from 'react';

export default function ProductCard({product}) {
  console.log('pr',product)
  return (
    <div className="relative h-full group flex flex-col items-center bg-white border-2 border-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:border-secondary">
      {/* Product Image Container */}
      <div className="relative w-44 h-44 flex items-center justify-center rounded-lg overflow-hidden">
        <Image
          src={`/images/products${product.path}`}
          alt={product.name}
          width={176}
          height={176}
          className="object-cover"
        />
      </div>

      {/* Product Name */}
      <p className="mt-4 text-sm font-semibold text-gray-800 group-hover:text-secondary transition-colors duration-300 text-center capitalize ">
        {product.name}
      </p>

{product.size?
      <p className='bg-black p-2 text-white font-bold absolute top-4 left-4 rounded-lg text-xs'>{product.size}</p>

:""}
    </div>
  );
}
