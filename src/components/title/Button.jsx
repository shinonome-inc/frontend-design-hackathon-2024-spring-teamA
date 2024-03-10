import React from "react";
import styled from "styled-components";

export const Button = ({ buttonText, onClick }) => (
  <StyledButton onClick={onClick}>
    <StyledLine />
    <StyledText>{buttonText}</StyledText>
  </StyledButton>
);

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 54px;
  writing-mode: vertical-rl;
  font-family: serif;
  letter-spacing: 15px;
  width: 150px;
  height: 400px;
  text-align: center;
  background-color: #6dc5c6;
  border: none;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    box-shadow: none;
`;

const StyledLine = styled.div`
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 15px;
  right: 15px;
  border: 1px solid #070c0d;
`;

const StyledText = styled.div`
  color: #070c0d;
`;
