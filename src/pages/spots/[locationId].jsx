import { useRouter } from "next/router";
import styled from "styled-components";
import Background from "./components/Background";
import TitleText from "./components/TitleText";
import ReturnButton from "./components/Button";
import Spot from "./components/Spot";
import { shrines } from "../../data/shrine";

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

export async function getServerSideProps(context) {
  return { props: data };
}

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
