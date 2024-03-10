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
          <Image src={"/title/torii-imge.svg"} width={800} height={720} />
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
  bottom: 9%;
  left: 50%;
  transform: translateX(-50%);
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 11%;
  left: 50%;
  transform: translateX(-50%);
`;

const LeftTextWrapper = styled.div`
  position: absolute;
  top: 7%;
  bottom: 6%;
  left: 21%;
`;
const RightTextWrapper = styled.div`
  position: absolute;
  top: 13%;
  bottom: 7%;
  right: 21%;
`;
