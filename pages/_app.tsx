import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{margin:0;padding:0;font:inherit;color:inherit;}
  *, :after, :before {box-sizing:border-box;flex-shrink:0;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:4}
  html, body {height:100%;}
  img, picture, video, canvas, svg {display: block;max-width:100%;}
  button {background:none;border:0;cursor:pointer;}
  a {text-decoration:none}
  table {border-collapse:collapse;border-spacing:0}
`;

const theme = {
  brandColor: {
    orange: '#F45400'
  },
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

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.layout || ((children) => <>{children}</>);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{Layout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  );
}

export default MyApp;
