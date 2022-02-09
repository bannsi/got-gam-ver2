import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import NextButton from '../../../common/components/buttons/NextButton';
import DatePicker from 'react-datepicker';
import { nextPage, selectAddress, selectDate, setDate } from '../utils/makePiece.slice';
import { Headline } from '../../../../styles/text/Headline';
import { Title } from '../components/Title';
require('react-datepicker/dist/react-datepicker.css');
const Date = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectAddress);
  const initDate = useSelector(selectDate);
  const [date, setImgDate] = useState(initDate);
  return (
    <Container type="5">
      <div>
        <Title>
          <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            selected={date}
            onChange={(date: Date) => {
              setImgDate(date);
              dispatch(setDate(date));
            }}
          />
          <div className="desc">에 갔던</div>
        </Title>
        <Title>
          <div className="address">카페드펭</div>
          <div className="desc">은</div>
        </Title>
      </div>
      <NextButton disable={false} onNext={() => dispatch(nextPage())} />
    </Container>
  );
};

export default Date;

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  padding: 24px 16px;
  .react-datepicker-wrapper {
    width: 180px;
  }
  input {
    width: 180px;
    height: 36px;
    text-align: center;
    ${(props) =>
      props.theme.grayScale.border && `border: 1px solid ${props.theme.grayScale.border}`};
    box-sizing: border-box;
    border-radius: 8px;
    ${Headline}
    color: ${(props) => props.theme.grayScale.body}
  }
`;
