import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const Background = styled.div`
  background: linear-gradient(#FF7F00, #FFBB00);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

export { Background, GlobalStyle };