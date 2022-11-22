import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Roboto', sans-serif;
  }
`;
