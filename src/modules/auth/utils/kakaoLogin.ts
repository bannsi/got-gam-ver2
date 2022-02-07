import axios from 'axios';
import Router from 'next/router';
import { tokenStore } from '../../../app/tokenStore';

export const kakaoLogin = async (code: string | string[]) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `https://gotgam.shop/accounts/v1/kakao/login?code=${code}`
    });
    const TOKEN = res.data.body;
    tokenStore.save(TOKEN);
    await Router.push('/');
  } catch (error) {
    console.log('소셜 로그인 에러');
    await Router.push('/auth');
  }
};
