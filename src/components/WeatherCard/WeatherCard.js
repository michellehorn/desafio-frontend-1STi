import React from "react";
import styled from "styled-components";
import { colors } from "../../style-variables";

const WeatherCardStyle = styled.div`
  width: 400px;
  height: 200px;
  margin: auto;
  padding: 20px 30px;
  background-color: white;
  box-shadow: 1px 1px 6px ${colors.shadow};
  border: none;
  position: relative;
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: ${colors.primary};
  font-size: 18px;
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  cursor: pointer;
`;

const WeatherCard = ({ children, isOpen, closeCard }) => {
  if (!isOpen) return null;
  return (
    <WeatherCardStyle>
      <CloseButton onClick={closeCard}>x</CloseButton>
      {children}
    </WeatherCardStyle>
  );
};

export default WeatherCard;
