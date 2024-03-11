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
  font-size: 2.8vw;
  writing-mode: vertical-rl;
  white-space: nowrap;
  font-family: Noto Serif JP;
  letter-spacing: 2vh;
  width: 8vw;
  height: 39vh;
  text-align: center;
  background-color: #6dc5c6;
  border: none;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    box-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 5vw;
    width: 15vw;
    height: 20vh;
  }
`;

const StyledLine = styled.div`
  position: absolute;
  top: 1.8vh;
  bottom: 1.8vh;
  left: 1vw;
  right: 1vw;
  border: 1px solid #070c0d;
`;

const StyledText = styled.div`
  color: #070c0d;
`;
