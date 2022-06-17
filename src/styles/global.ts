import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('/fonts/heebo-v20-latin-300.woff2') format('woff2');
}

@font-face {
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/heebo-v20-latin-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('/fonts/heebo-v20-latin-500.woff2') format('woff2');
}

@font-face {
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/heebo-v20-latin-700.woff2') format('woff2');
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.fontFamily};
    }
  `}
`

export default GlobalStyles
