'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const touchStartX = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [index, images.length, onClose, onNavigate]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const SWIPE_THRESHOLD = 50;

    if (deltaX > SWIPE_THRESHOLD) {
      onNavigate((index - 1 + images.length) % images.length);
    } else if (deltaX < -SWIPE_THRESHOLD) {
      onNavigate((index + 1) % images.length);
    }
    touchStartX.current = null;
  };

  return (
    <div
      className='fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4'
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        type='button'
        onClick={onClose}
        aria-label='Close preview'
        className='absolute top-4 right-4 md:top-6 md:right-6 text-white text-3xl md:text-4xl leading-none w-10 h-10 flex items-center justify-center hover:opacity-70 z-10'
      >
        &times;
      </button>

      <button
        type='button'
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + images.length) % images.length);
        }}
        aria-label='Previous image'
        className='absolute left-2 md:left-6 text-white text-3xl md:text-5xl w-10 h-10 md:w-14 md:h-14 flex items-center justify-center hover:opacity-70 z-10'
      >
        &#10094;
      </button>

      <div
        className='relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center'
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`Preview image ${index + 1} of ${images.length}`}
          width={1200}
          height={1200}
          className='w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg'
          priority
        />
      </div>

      <button
        type='button'
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % images.length);
        }}
        aria-label='Next image'
        className='absolute right-2 md:right-6 text-white text-3xl md:text-5xl w-10 h-10 md:w-14 md:h-14 flex items-center justify-center hover:opacity-70 z-10'
      >
        &#10095;
      </button>

      <div className='absolute bottom-4 md:bottom-6 text-white text-sm md:text-base bg-black/50 px-3 py-1 rounded-full'>
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
