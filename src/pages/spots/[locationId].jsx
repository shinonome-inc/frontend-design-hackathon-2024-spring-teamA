import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "../../colors";
import Image from "next/image";
import Background from "./components/Background";
import TitleText from "./components/TitleText";
import ReturnButton from "./components/Button";
// import Spot from "./components/Spot";
import { shrines } from "../../data/shrine";
import { GlobalStyle } from "../../components/GlobalStyle";

const SpotsPage = () => {
  const router = useRouter();
  const locationId = router.query.locationId;

  let data = undefined;
  switch (locationId) {
    case "shrine1":
      data = shrines.shrine1;
      break;
    case "shrine2":
      data = shrines.shrine2;
      break;
    case "shrine3":
      data = shrines.shrine3;
      break;
    case "shrine4":
      data = shrines.shrine4;
      break;
    case "shrine5":
      data = shrines.shrine5;
      break;
    case "shrine6":
      data = shrines.shrine6;
      break;
    default:
      data = shrines.shrine1;
  }
  const onClick = () => {
    router.back();
    console.log(router);
  };

  return (
    <AllWrapper>
      <Background>
        <SpotsContainerWrapper>
          <TitleText />
          <SpotsWrapper>
            <EachWrapper>
              {/* <Spot spot={data.Spot1} /> */}
              <SpotContent>
                <ImageWrapper>
                  <Image src={data.Spot1.PhotoLink}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </ImageWrapper>
                <TextWrapper>
                  <GlobalStyle />
                  <SpotName>{data.Spot1.Name}</SpotName>
                  <SpotExplanation>{data.Spot1.Explanation}</SpotExplanation>
                </TextWrapper>
              </SpotContent>
            </EachWrapper>
            <EachWrapper>
              {/* <Spot spot={data.Spot2} /> */}
              <SpotContent>
                <ImageWrapper>
                  <Image src={data.Spot2.PhotoLink}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </ImageWrapper>
                <TextWrapper>
                  <GlobalStyle />
                  <SpotName>{data.Spot2.Name}</SpotName>
                  <SpotExplanation>{data.Spot2.Explanation}</SpotExplanation>
                </TextWrapper>
              </SpotContent>
            </EachWrapper>
            <EachWrapper>
              {/* <Spot spot={data.Spot3} /> */}
              <SpotContent>
                <ImageWrapper>
                  <Image src={data.Spot3.PhotoLink}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </ImageWrapper>
                <TextWrapper>
                  <GlobalStyle />
                  <SpotName>{data.Spot3.Name}</SpotName>
                  <SpotExplanation>{data.Spot3.Explanation}</SpotExplanation>
                </TextWrapper>
              </SpotContent>
            </EachWrapper>
          </SpotsWrapper>
          <ReturnButton onClick={onClick} />
        </SpotsContainerWrapper>
      </Background>
    </AllWrapper>
  );
};
export default SpotsPage;

const AllWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: hidden;
`;

const SpotsContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 24px;
  @media (max-width: 600px) {
    overflow-y: scroll;
  }
`;

const SpotsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  gap: 2%;
  overflow-y: scroll;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const EachWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
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