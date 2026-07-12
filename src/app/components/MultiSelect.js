'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

function toLabel(value) {
  return value.replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function MultiSelect({ options, value, onChange, placeholder = 'Select...', id }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (option) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  const removeOption = (option, e) => {
    e.stopPropagation();
    onChange(value.filter((v) => v !== option));
  };

  return (
    <div className='relative' ref={containerRef} id={id}>
      <button
        type='button'
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-4 min-h-[58px] text-left flex items-center flex-wrap gap-2'
      >
        {value.length === 0 && <span className='text-gray-500'>{placeholder}</span>}
        {value.map((option) => (
          <span
            key={option}
            className='bg-secondary text-white text-xs md:text-sm rounded-full pl-3 pr-2 py-1 flex items-center gap-1'
          >
            {toLabel(option)}
            <span
              role='button'
              tabIndex={0}
              onClick={(e) => removeOption(option, e)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') removeOption(option, e);
              }}
              aria-label={`Remove ${toLabel(option)}`}
              className='hover:opacity-70 leading-none'
            >
              &times;
            </span>
          </span>
        ))}
        <span className='ml-auto pl-2 flex-shrink-0'>
          <Image
            src='/images/icons/ArrowDown.svg'
            alt=''
            width={13}
            height={13}
            className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </span>
      </button>

      {isOpen && (
        <ul
          role='listbox'
          aria-multiselectable='true'
          className='absolute z-30 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto'
        >
          {options.map((option) => {
            const selected = value.includes(option);
            return (
              <li
                key={option}
                role='option'
                aria-selected={selected}
                onClick={() => toggleOption(option)}
                className={`px-4 py-3 text-sm cursor-pointer flex items-center gap-3 hover:bg-primaryExtraLight ${
                  selected ? 'font-semibold text-secondary' : 'text-gray-700'
                }`}
              >
                <span
                  aria-hidden='true'
                  className={`flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                    selected ? 'bg-secondary border-secondary' : 'border-gray-300 bg-white'
                  }`}
                >
                  {selected && (
                    <svg viewBox='0 0 16 16' className='w-3 h-3 fill-none stroke-white stroke-[2.5]'>
                      <path d='M3 8.5L6.5 12L13 4.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                  )}
                </span>
                {toLabel(option)}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
