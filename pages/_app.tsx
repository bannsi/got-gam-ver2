import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
