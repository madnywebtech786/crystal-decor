'use client';

import React, { useState, useRef } from 'react';

const Accordion = ({ title, children, className = '',isNav=false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Reference to the content div

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={` border-gray-200 ${className}`}>
      <button
        className={`flex justify-between items-center w-full text-left text-white text-xl ${isNav?'':'font-semibold'} focus:outline-none`}
        onClick={toggleAccordion}
      >
        {title}
        <svg
          className={`${isNav? 'w-4 h-4':'w-6 h-6'}  transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="overflow-y-scroll transition-all duration-500 ease-in-out accordion-child"
        style={{
          height: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
      >
        <div className="py-2 text-gray-600 ">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
