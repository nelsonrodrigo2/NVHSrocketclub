import React from 'react';

const Logo = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      <circle cx="200" cy="200" r="200" fill="#1E3A8A"/>
      <circle cx="200" cy="200" r="180" fill="white"/>
      <path
        d="M200 50 L320 300 L200 250 L80 300 Z"
        fill="#1E3A8A"
      />
      <circle cx="200" cy="180" r="30" fill="white"/>
      <text
        x="200"
        y="180"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#1E3A8A"
        fontSize="24"
        fontWeight="bold"
      >
        ARC
      </text>
      <text
        x="200"
        y="220"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#1E3A8A"
        fontSize="16"
      >
        25-26
      </text>
      <path
        d="M160 300 L200 320 L240 300"
        fill="#EF4444"
      />
    </svg>
  );
};

export default Logo;