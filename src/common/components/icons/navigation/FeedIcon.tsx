import React from 'react';
import { IconContainer } from '../IconContainer';
import { IconProps } from '../IconProps.type';

const FeedIcon = ({ onClick, type = 'outlined' }: IconProps) => {
  return (
    <IconContainer
      onClick={onClick}
      dangerouslySetInnerHTML={{
        __html: svgMap[type]
      }}
    />
  );
};

export default FeedIcon;

const svgMap = {
  ['filled']: ` <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_330_6856)">
        <path d="M22 5H6C5.4 5 5 5.4 5 6V23H23V6C23 5.4 22.6 5 22 5ZM15 16H8V14.5H15V16ZM20 11H8V9.5H20V11Z" fill="black"/>
        <path d="M27.7502 20L28 20.2764V22.7141C28 23.0322 27.9459 23.3674 27.8377 23.7195C27.729 24.0712 27.5585 24.3937 27.3251 24.687C27.0918 24.9799 26.8043 25.215 26.4628 25.3908C26.1213 25.5666 25.7256 25.6963 25.2754 25.7803V24.976C25.7585 24.8255 26.1126 24.5612 26.3377 24.1843C26.5628 23.8074 26.6749 23.3339 26.6749 22.7646H25.2251L25 22.463V20.2511L25.2498 20H27.7502Z" fill="#F45400"/>
        </g>
        <defs>
        <clipPath id="clip0_330_6856">
        <rect width="28" height="28" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `,
  ['outlined']: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" fill="white"/>
        <path d="M27 11.2498H9V13.4998H27V11.2498Z" fill="#666666"/>
        <path d="M19.5 18.75H9V21H19.5V18.75Z" fill="#666666"/>
        <path d="M30 4.49976H6C5.1 4.49976 4.5 5.09976 4.5 5.99976V31.4998H31.5V5.99976C31.5 5.09976 30.75 4.49976 30 4.49976ZM29.25 29.2498H6.75V6.74976H29.25V29.2498Z" fill="#666666"/>
        </svg>
        `
};
