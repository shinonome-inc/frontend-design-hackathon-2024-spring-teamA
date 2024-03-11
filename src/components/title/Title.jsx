import React from "react";
import styled from "styled-components";

export const TitleText = ({ Text }) => <StyledTitle>{Text}</StyledTitle>;

const StyledTitle = styled.h1`
  text-align: center;
  justify-content: center;
  display: flex;
  color: #070c0d;
  font-size: 5.7vw;
  font-family: Kaisei HarunoUmi;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 6vh;
  }
`;
