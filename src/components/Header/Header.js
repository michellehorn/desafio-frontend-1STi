import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  text-align: center;
  color: white;
  font-size: 22px;
  margin-top: 50px;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Previsão do tempo</h1>
    </HeaderStyle>
  );
};

export default Header;
