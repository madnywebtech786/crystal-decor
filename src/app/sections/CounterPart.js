'use client';
import React, { useEffect, useState } from "react";

const Counter = ({ endValue, duration = 2000, start }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return; // Start animation only when the section is visible

    let startVal = 0;
    const increment = endValue / (duration / 10);

    const interval = setInterval(() => {
      startVal += increment;
      if (startVal >= endValue) {
        clearInterval(interval);
        setValue(endValue);
      } else {
        setValue(Math.ceil(startVal));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [start, endValue, duration]);

  return <span>{value.toLocaleString()}</span>;
};

export default Counter;
