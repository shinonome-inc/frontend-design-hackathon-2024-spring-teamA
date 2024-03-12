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
  let data = require("@/data/" + locationId);
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
              <Spot spot={data.Spot1} />
            </EachWrapper>
            <EachWrapper>
              <Spot spot={data.Spot2} />
            </EachWrapper>
            <EachWrapper>
              <Spot spot={data.Spot3} />
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
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: none;
  }
`;

const EachWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
