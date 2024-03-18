import styled from "styled-components";
import { colors } from "@/colors";
import Image from "next/image";
import React from "react";
import { basePath } from "src/../next.config.mjs";
const BASE_PATH = basePath ? basePath : "";

const Background = ({ children }) => {
  return (
    <>
      <LogoWrapper>
        <Image src={BASE_PATH+"/Utils/logo.svg"} width={400} height={200} />
      </LogoWrapper>
      <ResultBody>
        <AllWrapper>
          <Image src={BASE_PATH+"/Background.png"} layout="fill" objectFit="fill" />
          {children}
        </AllWrapper>
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
  height: 100%;
  padding: 10%;
  > img {
    vertical-align: bottom;
  }
  @media (max-width: 800px) {
    padding: 10% 3%;
    overflow: hidden;
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

const AllWrapper = styled.div`
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: solid #217475 5px;
  overflow-y: scroll;
`;
