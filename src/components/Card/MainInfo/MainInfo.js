import React from "react";
import styled from "styled-components";
import { colors } from "../../../style-variables";

const MainInfoStyle = styled.h1`
  color: ${colors.tertiary};
`;

const MainInfo = ({ temperature, climate }) => {
  return (
    <MainInfoStyle>
      {temperature}°C {climate}
    </MainInfoStyle>
  );
};

export default MainInfo;
