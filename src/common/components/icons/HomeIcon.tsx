import React from 'react';
import { IconContainer } from './IconContainer';
import { IconProps } from './IconProps.type';

const HomeIcon = ({ onClick, type = 'outlined' }: IconProps) => {
  return (
    <IconContainer
      onClick={onClick}
      dangerouslySetInnerHTML={{
        __html: svgMap[type]
      }}
    />
  );
};

export default HomeIcon;

const svgMap = {
  ['filled']: `<svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" fill="white"/>
        <g clip-path="url(#clip0_217_4076)">
        <path d="M18.7 4.14931C18.4 3.99938 17.95 3.99938 17.5 4.14931L1 14.6446L2.2 16.5937L4.6 15.0943V32.4865H13.6V23.4905C13.6 22.5909 14.2 21.9912 15.1 21.9912H21.1C22 21.9912 22.6 22.5909 22.6 23.4905V32.4865H31.6V15.0943L34 16.5937L35.2 14.6446L18.7 4.14931Z" fill="black"/>
        </g>
        <path d="M38.5837 28L39 28.4606V32.5235C39 33.0537 38.9098 33.6123 38.7295 34.1992C38.5483 34.7853 38.2641 35.3228 37.8752 35.8117C37.4863 36.2998 37.0072 36.6916 36.438 36.9847C35.8688 37.2777 35.2093 37.4939 34.4589 37.6339V36.2934C35.2641 36.0424 35.8543 35.602 36.2295 34.9739C36.6047 34.3457 36.7915 33.5564 36.7915 32.6077H34.3752L34 32.105V28.4185L34.4163 28H38.5837V28Z" fill="#F45400"/>
        <defs>
        <clipPath id="clip0_217_4076">
        <rect width="34.2" height="28.3371" fill="white" transform="translate(1 4)"/>
        </clipPath>
        </defs>
        </svg>
        `,
  ['outlined']: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" fill="white"/>
        <path d="M19.2 3.225C18.9 2.925 18.3 2.925 18 3.225L1.5 13.725L2.7 15.675L5.1 14.175V31.575H14.85H22.35H32.1V14.025L34.5 15.525L35.7 13.575L19.2 3.225ZM21.6 29.175H15.6V21.675H21.6V29.175ZM29.85 29.175H23.85V20.925C23.85 20.025 23.25 19.425 22.35 19.425H14.85C13.95 19.425 13.35 20.025 13.35 20.925V29.175H7.35V12.675L18.6 5.475L29.85 12.675V29.175Z" fill="#666666"/>
        </svg>
        `
};
