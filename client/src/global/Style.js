import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Roboto', sans-serif;
  
  }

  * {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

html body {
  padding: 0;
  margin: 0;
}
`;
