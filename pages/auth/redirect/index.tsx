import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { kakaoLogin } from '../../../src/modules/auth/utils/kakaoLogin';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.query.code) {
      kakaoLogin(router.query.code);
    }
  }, [router.query]);
  return <div></div>;
};

export default Index;
