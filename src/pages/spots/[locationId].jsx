import { paths } from "../../paths";
import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "@/colors";
import Image from "next/image";
import Background from "./components/Background";
import TitleText from "./components/TitleText";
import ReturnButton from "./components/Button";
import Spot from "./components/Spot";

const SpotsPage = () => {
  const router = useRouter();
  const locationId = router.query.locationId;
  const onClick = () => {
    router.back();
    console.log(router);
  };
  return (
    <>
      <Background>
        <SpotsContainerWrapper>
          <TitleText />
          <SpotsWrapper>
            <Spot spot={locationId} />
            <Spot spot={locationId} />
            <Spot spot={locationId} />
          </SpotsWrapper>
          <ReturnButton onClick={onClick}/>
        </SpotsContainerWrapper>
      </Background>
    </>
  );
};
export default SpotsPage;

const SpotsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 2%;
  overflow-y: auto;

  @media(max-width: 600px){
    flex-direction: column;
  }
`;

const SpotsContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap:24px;

  @media(max-width: 600px){
    min-height: 400px;
  }
`;
