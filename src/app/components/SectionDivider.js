import Image from 'next/image';
import React from 'react';

export default function SectionDivider({className=""}) {
  return (
    <div>
      <Image
        src={'/images/divider2.png'}
        alt='divider'
        width={200}
        height={100}
        className={`w-40 h-5 ${className} `}
      />
    </div>
  );
}
