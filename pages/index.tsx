import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Home from '../src/modules/home/Home';
import { getLayout } from '../src/modules/layout/Layout';
import styles from '../styles/Home.module.css';

const Index = () => {
  return <Home />;
};

Index.layout = getLayout;

export default Index;
