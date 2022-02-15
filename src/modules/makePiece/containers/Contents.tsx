import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import NextButton from '../../../common/components/buttons/NextButton';
import { Title } from '../components/Title';
import { makePiece } from '../utils/makePiece.slice';

const Contents = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Container>
      <Title>
        <div className="address">
          기록하고 싶은 게 있다면 <br /> 자유롭게 작성해주세요
        </div>
      </Title>

      <NextButton
        text="조각 올리기"
        disable={false}
        onNext={() => {
          router.push('/');
          dispatch(makePiece());
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
