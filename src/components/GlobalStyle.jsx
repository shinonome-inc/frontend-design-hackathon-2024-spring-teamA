import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: "Kaisei HarunoUmi";
      src: url("/fonts/KaiseiHarunoUmi-Bold.ttf") format("truetype");
    }
    @font-face {
      font-family: "Noto Serif JP";
      src: url("/fonts/NotoSerifJP-Medium.otf") format("opentype");
    }
  `;
