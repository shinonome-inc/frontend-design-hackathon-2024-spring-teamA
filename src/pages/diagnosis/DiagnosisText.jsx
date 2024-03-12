import styled from "styled-components";
import { colors } from "@/colors";
import Image from "next/image";
import { GlobalStyle } from "@/components/GlobalStyle";

const DiagnosisText = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <TextWrapper>
        <Text>診断中...</Text>
      </TextWrapper>
    </Wrapper>
  );
};
export default DiagnosisText;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const TextWrapper = styled.div`
  z-index: 1;
  width: 100%;
  position: relative;
  top: 70%;
`;

const Text = styled.div`
  margin: 0;
  width: 100%;
  font-size: 50px;
  font-family: Noto Serif JP;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 40px;
  }
`;
