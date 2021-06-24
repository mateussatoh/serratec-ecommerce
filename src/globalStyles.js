import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Fira Sans", sans-serif;
    }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 990px) {
    max-width: 100vw;
    padding: 0;
  }
`;

export default GlobalStyle;
