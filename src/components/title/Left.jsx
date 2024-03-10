import React from "react";
import styled from "styled-components";

export const LeftText = ({ Text }) => (
  <StyledTitle>
    <StyledLine />
    <StyledText>{Text}</StyledText>
  </StyledTitle>
);

const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  writing-mode: vertical-rl;
  height: 100%;
  color: #070c0d;
  font-size: 42px;
  letter-spacing: 22px;
  font-family: Noto Serif JP;
  font-weight: 500;
  white-space: nowrap;
`;
const StyledLine = styled.div`
  border-left: 1px solid #070c0d;
  height: 50%;
`;
const StyledText = styled.div`
  margin: 1% 0 0 0;
`;
