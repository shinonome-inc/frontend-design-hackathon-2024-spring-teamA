import styled from "styled-components";
import { colors } from "@/colors";
import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <>
      <LogoWrapper>
        <Image src={"/Utils/logo.svg"} width={400} height={200} />
      </LogoWrapper>
      <ResultBody>
        <Image src={"/Background.png"} layout="fill" objectFit="fill" />
        {children}
      </ResultBody>
    </>
  );
};
export default Background;

const ResultBody = styled.div`
  box-sizing: border-box;
  top: 0;
  left: 0;
  bottom: 0;
  height: calc(100vh - 16px);
  padding: 10%;
  > img {
    vertical-align: bottom;
  }
  @media (max-width: 800px) {
    padding: 10% 3%;
    overflow-y: hidden;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

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
