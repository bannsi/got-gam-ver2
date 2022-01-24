import React from 'react';
import { IconContainer } from '../IconContainer';
import { IconProps } from '../IconProps.type';

const MyNavIcon = ({ onClick, type = 'outlined' }: IconProps) => {
  return (
    <IconContainer
      onClick={onClick}
      dangerouslySetInnerHTML={{
        __html: svgMap[type]
      }}
    />
  );
};

export default MyNavIcon;

const svgMap = {
  ['filled']: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_330_6869)">
        <path d="M27.7502 20L28 20.2764V22.7141C28 23.0322 27.9459 23.3674 27.8377 23.7195C27.729 24.0712 27.5585 24.3937 27.3251 24.687C27.0918 24.9799 26.8043 25.215 26.4628 25.3908C26.1213 25.5666 25.7256 25.6963 25.2754 25.7803V24.976C25.7585 24.8255 26.1126 24.5612 26.3377 24.1843C26.5628 23.8074 26.6749 23.3339 26.6749 22.7646H25.2251L25 22.463V20.2511L25.2498 20H27.7502Z" fill="#F45400"/>
        <g clip-path="url(#clip1_330_6869)">
        <path d="M14 12C16.2091 12 18 10.2091 18 8C18 5.79086 16.2091 4 14 4C11.7909 4 10 5.79086 10 8C10 10.2091 11.7909 12 14 12Z" fill="black"/>
        <path d="M23 22.5H5V17.5C5 15.3 6.8 13.5 9 13.5H19C21.2 13.5 23 15.3 23 17.5V22.5Z" fill="black"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_330_6869">
        <rect width="28" height="28" fill="white"/>
        </clipPath>
        <clipPath id="clip1_330_6869">
        <rect width="18" height="18.5" fill="white" transform="translate(5 4)"/>
        </clipPath>
        </defs>
        </svg>
        `,
  ['outlined']: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 12C16.2 12 18 10.2 18 8C18 5.8 16.2 4 14 4C11.8 4 10 5.8 10 8C10 10.2 11.8 12 14 12ZM14 5.5C15.4 5.5 16.5 6.6 16.5 8C16.5 9.4 15.4 10.5 14 10.5C12.6 10.5 11.5 9.4 11.5 8C11.5 6.6 12.6 5.5 14 5.5Z" fill="#666666"/>
        <path d="M19 15C20.4 15 21.5 16.1 21.5 17.5V21H6.5V17.5C6.5 16.1 7.6 15 9 15H19ZM19 13.5H9C6.8 13.5 5 15.3 5 17.5V22.5H23V17.5C23 15.3 21.2 13.5 19 13.5Z" fill="#666666"/>
        </svg>
        `
};
