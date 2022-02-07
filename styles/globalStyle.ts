import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  //css reset
  *{margin:0;padding:0;font:inherit;color:inherit;}
  *, :after, :before {box-sizing:border-box;flex-shrink:0;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:4}
  html, body, #__next{height:100%; max-width: 768px; margin: 0 auto;}
  img, picture, video, canvas, svg {display: block;max-width:100%;}
  button {background:none;border:0;cursor:pointer;}
  a {text-decoration:none}
  table {border-collapse:collapse;border-spacing:0}
  body{
    font-family: 'NotoSans KR', sans-serif;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  

  //modal animation
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 300ms ease-in-out;     
  }

  .ReactModal__Content{
      max-height: 0;
      transition: max-height 500ms ease-in-out; 
      
  }
  .ReactModal__Overlay--after-open{
      opacity: 1;
  }
  .ReactModal__Content--after-open{
      max-height: 600px;
      
  }
  .ReactModal__Overlay--before-close{
      opacity: 0;
  }
  .ReactModal__Content--before-close{
      max-height: 0;
  }
`;
