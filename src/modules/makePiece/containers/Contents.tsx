import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import NextButton from '../../../common/components/buttons/NextButton';
import { Title } from '../components/Title';
import { makePieceStart, setContents } from '../utils/makePiece.slice';

const Contents = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  return (
    <Container>
      <Title>
        <div className="address">
          기록하고 싶은 게 있다면 <br /> 자유롭게 작성해주세요
        </div>
      </Title>
      <TextArea
        placeholder="200자 이내"
        value={content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
        maxLength={200}
      ></TextArea>
      <NextButton
        text="조각 올리기"
        disable={false}
        onNext={() => {
          dispatch(setContents(content));
          dispatch(makePieceStart());
          dispatch;
          router.push('/');
        }}
      />
    </Container>
  );
};
//만들었던 조각 url로 나중에 고쳐주기
export default Contents;

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 16px;
`;

const TextArea = styled.textarea`
  margin: auto 0;
  margin-top: 56px;
  font-size: 16px;
  ::placeholder {
    color: ${(props) => props.theme.grayScale.disable};
  }
  border: none;
  outline: none;
`;
