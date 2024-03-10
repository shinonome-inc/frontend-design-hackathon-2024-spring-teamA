import React from "react";
import styled from "styled-components";

export const TitleText = ({ Text }) => <StyledTitle>{Text}</StyledTitle>;

const StyledTitle = styled.h1`
  text-align: center;
  justify-content: center;
  display: flex;
  color: #070c0d;
  font-size: 110px;
  font-family: Kaisei HarunoUmi;
  font-weight: 300;
  white-space: nowrap;
`;
