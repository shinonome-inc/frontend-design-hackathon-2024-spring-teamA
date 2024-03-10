import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Kaisei HarunoUmi";
        src: url("/fonts/KaiseiHarunoUmi-Bold.ttf") format("truetype");
    }

    body {
        font-family: "Kaisei HarunoUmi", sans-serif;
    }
`;

export const TitleText = ({ Text }) => (
  <>
    <GlobalStyle />
    <StyledTitle>{Text}</StyledTitle>
  </>
);

const StyledTitle = styled.h1`
  text-align: center;
  justify-content: center;
  display: flex;
  color: #070c0d;
  font-size: 110px;
`;
