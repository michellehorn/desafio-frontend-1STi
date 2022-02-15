import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  text-align: center;
  font-family: Arial;
  color: white;
  font-size: 28px;
  margin-top: 70px;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Previsão do tempo</h1>
    </HeaderStyle>
  );
};

export default Header;
