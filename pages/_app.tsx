import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { wrapper } from '../src/app/store';
import { GlobalStyle } from '../styles/globalStyle';

const theme = {
  brandColor: '#F45400',
  grayScale: {
    black: '#000000',
    body: '#666666',
    sub: '#999999',
    disable: '#cccccc',
    border: '#e1e1e1',
    searchBar: '#f3f3f3',
    background: '#f7f7f7',
    white: '#ffffff'
  }
};
declare global {
  interface Window {
    kakao: any;
  }
}

type NextPageWithLayout = NextPage & {
  layout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.layout || ((children) => <>{children}</>);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{Layout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
