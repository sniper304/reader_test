import React, { SVGProps } from 'react';

const MoreIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.25 10C19.2855 10 20.125 10.8395 20.125 11.875C20.125 12.9105 19.2855 13.75 18.25 13.75C17.2145 13.75 16.375 12.9105 16.375 11.875C16.375 10.8395 17.2145 10 18.25 10ZM12 10C13.0355 10 13.875 10.8395 13.875 11.875C13.875 12.9105 13.0355 13.75 12 13.75C10.9645 13.75 10.125 12.9105 10.125 11.875C10.125 10.8395 10.9645 10 12 10ZM5.75 10C6.78553 10 7.625 10.8395 7.625 11.875C7.625 12.9105 6.78553 13.75 5.75 13.75C4.71447 13.75 3.875 12.9105 3.875 11.875C3.875 10.8395 4.71447 10 5.75 10Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MoreIcon;
