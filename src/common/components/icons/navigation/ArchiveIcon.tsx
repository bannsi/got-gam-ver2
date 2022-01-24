import React from 'react';
import { NavIconContainer } from '../NavIconContainer';
import { IconProps } from '../IconProps.type';

const ArchiveIcon = ({ onClick, type = 'outlined' }: IconProps) => {
  return (
    <NavIconContainer
      onClick={onClick}
      dangerouslySetInnerHTML={{
        __html: svgMap[type]
      }}
    />
  );
};

export default ArchiveIcon;

const svgMap = {
  ['filled']: `<svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 31.5L18 26.1L6 31.5V7.2C6 5.7 7.35 4.5 9 4.5H27C28.65 4.5 30 5.7 30 7.2V31.5Z" fill="#181818"/>
        <path d="M37.5837 27L38 27.4606V31.5235C38 32.0537 37.9098 32.6123 37.7295 33.1992C37.5483 33.7853 37.2641 34.3228 36.8752 34.8117C36.4863 35.2998 36.0072 35.6916 35.438 35.9847C34.8688 36.2777 34.2093 36.4939 33.4589 36.6339V35.2934C34.2641 35.0424 34.8543 34.602 35.2295 33.9739C35.6047 33.3457 35.7915 32.5564 35.7915 31.6077H33.3752L33 31.105V27.4185L33.4163 27H37.5837Z" fill="#F45400"/>
        </svg>
        `,
  ['outlined']: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 6.75C27.45 6.75 27.75 7.05 27.75 7.2V28.05L18.9 24C18.6 23.85 18.3 23.85 18 23.85C17.7 23.85 17.4 23.85 17.1 24L8.25 27.9V7.2C8.25 7.05 8.55 6.75 9 6.75H27ZM27 4.5H9C7.35 4.5 6 5.7 6 7.2V31.5L18 26.1L30 31.5V7.2C30 5.7 28.65 4.5 27 4.5Z" fill="#666666"/>
        </svg>
        `
};
