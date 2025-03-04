import Image from 'next/image';
import React from 'react';

export default function ProductCard({product}) {
  console.log('pr',product)
  return (
    <div className="relative h-full group flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:border-gray-300">
      {/* Product Image Container */}
      <div className="relative w-44 h-44 flex items-center justify-center rounded-lg overflow-hidden">
        <Image
          src={`/images/products/${product.category}/${product.subcategory}/${product.name}.png`}
          alt={product.name}
          width={176}
          height={176}
          className="object-cover"
        />
      </div>

      {/* Product Name */}
      <p className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-secondary transition-colors duration-300 text-center">
        {product.name}
      </p>

      {/* Accent Border */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-secondary transition-border duration-300"></div>
    </div>
  );
}
