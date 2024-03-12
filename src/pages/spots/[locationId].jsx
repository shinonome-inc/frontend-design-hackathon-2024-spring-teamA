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
    <AllWrapper>
      <Background>
        <SpotsContainerWrapper>
          <TitleText />
          <SpotsWrapper>
            <Spot spot={locationId} />
            <Spot spot={locationId} />
            <Spot spot={locationId} />
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

const SpotsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 2%;
  overflow-y: scroll;

  @media (max-width: 600px) {
    flex-direction: column;
  }
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
