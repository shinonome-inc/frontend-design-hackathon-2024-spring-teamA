import { paths } from "../../paths";
import { useRouter } from "next/router";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Image from "next/image";
import { Button } from "../../components/question/Button";


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Kaisei HarunoUmi";
    src: url("/fonts/KaiseiHarunoUmi-Bold.ttf") format("truetype");
  }
  @font-face {
    font-family: "Noto Serif JP";
    src: url("/fonts/NotoSerifJP-Medium.otf") format("opentype");
  }
`;

const Question1Page = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question2);
  }
  return (
    <>
      <GlobalStyle />
      <LogoWrapper>
        <Image src={"/title/logo.svg"} width={400} height={200} />
      </LogoWrapper>
      <AllWrapper>
        <Image src={"/Background.png"} layout="fill" />
        <ButtonWrapper>
          <Button buttonText="診断開始" onClick={onClick} />
        </ButtonWrapper>
      </AllWrapper>
    </>
  );
};

export default Question1Page;

const LogoWrapper = styled.div`
  margin: 0;
  left: 1%;
  z-index: 100;
  height: 5%;
  width: calc(100% - 16px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
`;

const AllWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 48vh;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    top: 50vh;
  }
`;

