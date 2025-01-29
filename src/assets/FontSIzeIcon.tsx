import React, { SVGProps } from 'react';

const FontSizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.125 7L3.125 5L17.125 5V7"
        stroke="currentColor"
        strokeWidth="1.725"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.125 5L10.125 19M10.125 19H12.125M10.125 19H8.125"
        stroke="currentColor"
        strokeWidth="1.725"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 14L13.5 12H21.5V14"
        stroke="currentColor"
        strokeWidth="1.725"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 12V19M17.5 19H16M17.5 19H19"
        stroke="currentColor"
        strokeWidth="1.725"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FontSizeIcon;
