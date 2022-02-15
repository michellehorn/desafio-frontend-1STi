import React from "react";
import Home from "./pages/Home";
import { Background, GlobalStyle } from "./style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Home />
      </Background>
    </>
  );
};

export default App;
