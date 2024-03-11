import React from "react";
import styled from "styled-components";

export const RightText = ({ Text }) => (
  <StyledTitle>
    <StyledText>{Text}</StyledText>
    <StyledLine />
  </StyledTitle>
);

const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  writing-mode: vertical-rl;
  height: 100%;
  color: #070c0d;
  font-size: 3.6vh;
  letter-spacing: 2.4vh;
  font-family: Noto Serif JP;
  font-weight: 500;
  white-space: nowrap;
`;
const StyledLine = styled.div`
  border-left: 1px solid #070c0d;
  height: 50%;
`;
const StyledText = styled.div`
    margin: none;
`;
