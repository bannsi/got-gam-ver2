import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://dapi.kakao.com';

export interface ApiOption {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  headers?: { [key: string]: string };
  body?: { [key: string]: any }; // eslint-disable-line
  param?: { [key: string]: string | number | boolean };
}

const kakaoApiRequest = async <T>({ url, method, headers, body, param }: ApiOption): Promise<T> => {
  let response = {} as AxiosResponse;

  try {
    const requestConfig: AxiosRequestConfig = {
      baseURL: BASE_URL,
      url: `${url}.json`,
      method,
      data: body,
      params: param
    };
    requestConfig.headers = headers ? { ...headers } : {};
    requestConfig.headers.Authorization = `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_LOGIN_APP_KEY}`;
    response = await axios.request<T>(requestConfig);
  } catch (error) {
    console.log(error);
  }
  return response.data;
};

export default kakaoApiRequest;
