import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { wrapper } from '../src/app/store';
import { initMakePiece } from '../src/modules/makePiece/utils/makePiece.slice';
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

type NextPageWithLayout = NextPage & {
  layout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

declare global {
  interface Window {
    kakao: any;
  }
}

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
