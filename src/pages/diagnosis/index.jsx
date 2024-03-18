import { paths } from "../../paths";
import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "@/colors";
import Image from "next/image";
import { useState } from "react";
import Background from "./Background";
import DiagnosisText from "./DiagnosisText";

const DiagnosisPage = () => {
  const [getImageShow, setImageShow] = useState(0);
  const router = useRouter();
  const locationId = router.query.locationId;
  const goNextPage = () => {
    router.replace(paths.recommend + "/" + locationId);
  };

  setTimeout(() => {
    setImageShow(getImageShow + 1);
    if (getImageShow > 4) {
      goNextPage();
    }
  }, "1500");

  return (
    <AllWrapper>
      <Background>
        <DiagnosisWrapper>
          <TextWrapper>
            <DiagnosisText />
          </TextWrapper>
          <AllImageWrapper>
            <ImageWrapper visible={getImageShow % 4 > 0}>
              <Image src={"/diagnosis/diagnosing-level1.svg"} width={80} height={80} />
            </ImageWrapper>
            <ImageWrapper visible={getImageShow % 4 > 1}>
              <Image src={"/diagnosis/diagnosing-level2.svg"} width={80} height={80} />
            </ImageWrapper>
            <ImageWrapper visible={getImageShow % 4 > 2}>
              <Image src={"/diagnosis/diagnosing-level3.svg"} width={80} height={80} />
            </ImageWrapper>
          </AllImageWrapper>
        </DiagnosisWrapper>
      </Background>
    </AllWrapper>
  );
};
export default DiagnosisPage;

const AllWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: hidden;
  background-color: ${colors.Write};
`;

const DiagnosisWrapper = styled.div`
  box-sizing: border-box;
  z-index: 2;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: repeat(2, 1fr);
  background-color: ${colors.Write};
  gap: 40px;
  border: solid #dcdcdc 5px;
  border-radius: 20px;
  padding: 5% 10%;

  @media (max-width: 600px) {
    overflow-y: scroll;
  }
`;

const TextWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: solid #6dc5c6 3px;
`;

const AllImageWrapper = styled.div`
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  flex-direction: row;
  position: relative;
  left: 10%;
  width: 80%;
  height: 100%;
  justify-content: space-between;
  background-color: ${colors.Write};

  > img {
    border: none;
  }
`;

const ImageWrapper = styled.div`
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  flex-direction: column;
  > img {
    border: none;
  }
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;
