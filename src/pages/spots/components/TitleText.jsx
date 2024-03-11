import styled from "styled-components";
import { colors } from "@/colors";
import Image from "next/image";
import { GlobalStyle } from "@/components/GlobalStyle";

const TitleText = () => {
  return (
    <>
      <GlobalStyle />
      <TextWrapper>
        <Text>おすすめスポット</Text>
      </TextWrapper>
    </>
  );
};
export default TitleText;

const TextWrapper = styled.div`
  z-index: 1;
`;

const Text = styled.h1`
  font-weight: bold;
  font-size: 60;
  font-family: Noto Serif JP;
  text-align: center;
`;
