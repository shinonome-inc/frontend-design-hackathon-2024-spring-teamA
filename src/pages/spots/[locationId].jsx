import { paths } from "../../paths";
import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "@/colors";
import Image from "next/image";
import Background from "./components/background";

const SpotsPage = () => {
  const router = useRouter();
  const locationId = router.query.locationId;
  const onClick = () => {
    router.push(paths.index);
    console.log(router);
  };
  return (
    <>
      <Background>
        <LogoWrapper>
          <Image src={"/Utils/logo.svg"} width={400} height={200} />
        </LogoWrapper>{" "}
      </Background>
    </>
  );
};
export default SpotsPage;

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
