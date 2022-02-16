import React from "react";
import styled from "styled-components";
import { colors } from "../../../style-variables";

const OverlineStyle = styled.h5`
  color: ${colors.tertiary};
  margin-top: 2px;
`;

function Overline({ children }) {
  return <OverlineStyle>{children}</OverlineStyle>;
}

export default Overline;
