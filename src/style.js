import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { colors } from "./style-variables";

const Background = styled.div`
  background: linear-gradient(${colors.primary}, ${colors.secondary});
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: Arial;
  }
`;

export { Background, GlobalStyle };
