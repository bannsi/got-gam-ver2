import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { getLayout } from '../src/modules/layout/Layout';
import styles from '../styles/Home.module.css';

const Home = () => {
  return <div>홈페이지 입니다.???</div>;
};

Home.layout = getLayout;

export default Home;
