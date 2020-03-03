import { createGlobalStyle } from 'styled-components';

import catamaranWoff from '../fonts/Catamaran-Regular.woff';
import catamaranWoff2 from '../fonts/Catamaran-Regular.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Catamaran;
    src: url(${catamaranWoff}) format('woff'),
      url(${catamaranWoff2}) format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  html,
  body,
  #root {
    height: 100%;
    font-size: 16px;
  }

  #modal {
    position: relative;
    z-index: 999;
  }
`;

export default GlobalStyle;
