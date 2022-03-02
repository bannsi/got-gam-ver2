import React, { useState } from 'react';
import BackIcon from '../../../common/components/icons/BackIcon';
import styled from 'styled-components';
import DropdownIcon from '../icons/DropdownIcon';
import { Caption } from '../../../../styles/text/Caption';

interface HeaderProps {
  handleBack: () => void;
  text: string;
  isDropdown?: boolean;
  handleEdit?: () => void;
  handleRemove?: () => void;
}

const Header = ({ isDropdown = true, handleBack, text }: HeaderProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <div className="left-box">
        <BackIcon onBack={handleBack} />
        <div>{text}</div>
      </div>
      {isDropdown && (
        <DropdownButton onClick={() => setVisible(!visible)}>
          <DropdownIcon />
          {visible && (
            <Dropdown>
              <div>수정하기</div> <div className="remove">삭제하기</div>{' '}
            </Dropdown>
          )}
        </DropdownButton>
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 48px;
  min-height: 48px;
  background: #ffffff;
  padding: 0 4px;
  display: flex;
  justify-content: space-between;
  .left-box {
    display: flex;
    align-items: center;
  }
`;

const DropdownButton = styled.div`
  cursor: pointer;
  position: relative;
`;
const Dropdown = styled.div`
  z-index: 100;
  position: absolute;
  right: 48px;
  top: 24px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  height: 68px;
  width: 132px;
  display: flex;
  flex-direction: column;
  ${Caption}
  div {
    margin: 0 8px;
    padding: 8px 0;
  }
  .remove {
    color: ${(props) => props.theme.brandColor};
    border-top: 1px solid ${(props) => props.theme.grayScale.border};
  }
`;
