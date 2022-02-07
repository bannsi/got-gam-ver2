import { NextPageContext } from 'next';
import styled from 'styled-components';

interface ErrorProps {
  statusCode: number;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <Container>
      <Logo src="logo.svg" />
      <div>
        {statusCode
          ? `서버에 ${statusCode}에러가 발생했습니다. 
        다시 시도해주세요.`
          : `페이지 오류`}
      </div>
    </Container>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 48px;
  margin-bottom: 30px;
`;
