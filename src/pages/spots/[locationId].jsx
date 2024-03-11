import { paths } from "../../paths";
import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "@/colors";
import Image from "next/image";
import Background from "./components/Background";
import TitleText from "./components/TitleText";
import ReturnButton from "./components/Button";

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
        <TitleText />
        <ReturnButton/>
      </Background>
    </>
  );
};
export default SpotsPage;
