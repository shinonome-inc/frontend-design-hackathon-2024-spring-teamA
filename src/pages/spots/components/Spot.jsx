import styled from "styled-components";
import { colors } from "@/colors";
import Image from "next/image";
import { GlobalStyle } from "@/components/GlobalStyle";

const Spot = ({ spot }) => {

  return (
    <AllWrapper>
      <SpotContent>
        <ImageWrapper>
          <Image src={spot.PhotoLink}
            fill
            style={{ objectFit: "cover" }}
          />
        </ImageWrapper>
        <TextWrapper>
          <GlobalStyle />
          <SpotName>{spot.Name}</SpotName>
          <SpotExplanation>{spot.Explanation}</SpotExplanation>
        </TextWrapper>
      </SpotContent>
    </AllWrapper>
  );
};
export default Spot;

const AllWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
`;

const SpotContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  gap: 0px;
  border-radius: 50px;
  min-height: 400px;
  inline-size: 100%;
  word-break: break-all;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  position: relative;
`;

const TextWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  z-index: 1;
  margin: 0;
  background-color: ${colors.Write};
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 0px 0px 10px 10px;
  inline-size: 100%;
  word-break: break-all;
`;

const SpotName = styled.div`
  margin: 0;
  width: 100%;
  font-family: Noto Serif JP;
  font-weight: bold;
  font-size: 40px;
  position: relative;
  inline-size: 100%;
  word-break: break-all;
`;

const SpotExplanation = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: Noto Serif JP;
  font-size: 28px;
  inline-size: 100%;
  word-break: break-all;
`;
