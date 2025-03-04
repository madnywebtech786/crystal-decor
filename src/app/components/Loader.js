import React from 'react';

export default function Loader() {
  return (
    <div className='flex justify-center items-center h-40'>
    <div className='relative w-16 h-16'>
      {/* Outer spinning gradient circle */}
      <div className='absolute inset-0 w-full h-full border-4 border-t-transparent border-b-transparent rounded-full animate-spin-fast border-gradient-to-r from-primary to-secondary'></div>
      {/* Inner pulsing circle */}
      <div className='absolute inset-2 w-12 h-12 bg-primary rounded-full animate-pulse'></div>
      {/* Glow effect */}
      <div className='absolute inset-0 w-full h-full bg-primary opacity-20 rounded-full blur-md'></div>
    </div>
  </div>
  );
}
