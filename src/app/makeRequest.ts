import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { tokenStore } from './tokenStore';

axios.defaults.baseURL = 'https://gotgam.shop/';
export interface ApiOption {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  headers?: { [key: string]: string };
  body?: { [key: string]: any }; // eslint-disable-line
  query?: { [key: string]: string | number | boolean | string[] };
}

const makeRequest = async <T>({ url, method, headers, body, query }: ApiOption): Promise<T> => {
  // let token = tokenStore.get();
  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTk4MjY2MDQ1IiwiZXhwIjoxNjYxNzU0NzYwLCJpYXQiOjE2NDYyMDI3NjB9.9PSs9WUSfVxxLRWUOy8CxQS6mGXEGgzAOl3v5Iimi6qgPel5_QGAQvltPl9ZSyH0hT8nkwnvZF-k9XbOwc4zIw';
  let response = {} as AxiosResponse;
  try {
    const requestConfig: AxiosRequestConfig = {
      url,
      method,
      data: body,
      params: query
    };
    requestConfig.headers = headers ? { ...headers } : {};
    requestConfig.headers.Authorization = `Bearer ${token}`;
    response = await axios.request<T>(requestConfig);
  } catch (error) {
    console.log(error);
  }
  return response.data;
};

export default makeRequest;
