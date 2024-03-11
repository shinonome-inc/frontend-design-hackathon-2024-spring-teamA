import { paths } from "../paths";
import { useRouter } from "next/router";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Image from "next/image";
import { Button } from "../components/title/Button";
import { TitleText } from "../components/title/Title";
import { LeftText } from "../components/title/Left";
import { RightText } from "../components/title/Right";

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

const IndexPage = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question1);
  };

  return (
    <>
      <GlobalStyle />
      <LogoWrapper>
        <Image src={"/title/logo.svg"} width={400} height={200} />
      </LogoWrapper>
      <AllWrapper>
        <Image src={"/Background.png"} layout="fill" />
        <ImageWrapper>
          <Image src={"/title/torii-imge.svg"} alt="鳥居" layout="fill" objectFit="contain" />
        </ImageWrapper>
        <TitleWrapper>
          <TitleText Text="みちびきおやしろ" />
        </TitleWrapper>
        <ButtonWrapper>
          <Button buttonText="診断開始" onClick={onClick} />
        </ButtonWrapper>
        <LeftTextWrapper>
          <LeftText Text="ご案内いたします" />
        </LeftTextWrapper>
        <RightTextWrapper>
          <RightText Text="おすすめの神社を" />
        </RightTextWrapper>
      </AllWrapper>
    </>
  );
};

export default IndexPage;

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

const ImageWrapper = styled.div`
  position: absolute;
  bottom: 11vh;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: 62vh;
  min-width: 80vw;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 2vh;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5vw;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 47vh;
  left: 50%;
  transform: translateX(-50%);
`;

const LeftTextWrapper = styled.div`
  position: absolute;
  top: 7vh;
  bottom: 6vh;
  left: 22vw;
`;
const RightTextWrapper = styled.div`
  position: absolute;
  top: 13vh;
  bottom: 7vh;
  right: 22vw;
`;
