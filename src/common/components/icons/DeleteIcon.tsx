import React from 'react';
import styled from 'styled-components';

interface DeleteIconProps {
  onDelete: () => void;
}

const DeleteIcon = ({ onDelete }: DeleteIconProps) => {
  return (
    <IconContainer
      onClick={onDelete}
      dangerouslySetInnerHTML={{
        __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="10" fill="white" />
  <path
    d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0Z"
    fill="#F45400"
  />
  <rect
    x="4"
    y="14.7744"
    width="15.2374"
    height="2.17678"
    transform="rotate(-45 4 14.7744)"
    fill="white"
  />
  <rect
    x="5.53906"
    y="4"
    width="15.2374"
    height="2.17678"
    transform="rotate(45 5.53906 4)"
    fill="white"
  />
  <circle cx="10" cy="10" r="9.5" stroke="white" />
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default DeleteIcon;

const IconContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
