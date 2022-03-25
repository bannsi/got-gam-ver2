import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import NextButton from '../../../common/components/buttons/NextButton';
import DatePicker from 'react-datepicker';
import {
  FileType,
  nextPage,
  selectAddress,
  selectDate,
  selectImgs,
  setDate,
  setImg
} from '../utils/makePiece.slice';
import { Headline } from '../../../../styles/text/Headline';
import { Title } from '../components/Title';
import SelectIcon from '../../../common/components/icons/SelectIcon';
require('react-datepicker/dist/react-datepicker.css');
const Date = () => {
  const dispatch = useDispatch();
  const address = useSelector(selectAddress);
  const initDate = useSelector(selectDate);
  const imgs = useSelector(selectImgs);
  const [date, setImgDate] = useState(initDate);
  const [thumbnailId, setThumbnailId] = useState(imgs[0].id);
  const onSelect = useCallback(
    (id: number) => {
      setThumbnailId(id);
    },
    [imgs]
  );
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
          <div className="address">{address}</div>
          <div className="desc">은</div>
        </Title>
      </div>
      <Images>
        {imgs.map((file) => (
          <PreviewImg onClick={() => onSelect(file.id)} key={file.id} url={file.url as string}>
            {thumbnailId === file.id && <SelectIcon />}
          </PreviewImg>
        ))}
      </Images>
      <NextButton
        disable={false}
        onNext={() => {
          const newImgs = imgs.map((img) => {
            if (img.id === thumbnailId) return { ...img, thumbail: true } as FileType;
            else return { ...img, thumbail: false } as FileType;
          });

          dispatch(setImg(newImgs));
          dispatch(nextPage());
        }}
      />
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

const Images = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const Image = styled.img`
  width: 304px;
  height: 304px;
  border-radius: 8px;
  min-width: 304px;
  min-height: 304px;
  margin-right: 16px;
  object-fit: cover;
`;

interface ImgProps {
  url: string;
}

const PreviewImg = styled.div<ImgProps>`
  position: relative;
  width: 304px;
  height: 304px;
  border-radius: 8px;
  min-width: 304px;
  min-height: 304px;
  margin-right: 16px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: cover;
`;
