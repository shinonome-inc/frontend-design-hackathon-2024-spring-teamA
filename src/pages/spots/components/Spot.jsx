import styled from "styled-components";
import { colors } from "@/colors";
import Image from "next/image";
import { GlobalStyle } from "@/components/GlobalStyle";

const Spot = ({spot}) => {
//   const router = useRouter();
//   const locationId = router.query.locationId;
//   const onClick = ({ location }) => {
//     router.push(paths.index);
//     console.log(router);
//   };
  return (
    <>
      <SpotContent>
        <ImageWrapper>
          <Image src={"/Kyoto.jpg"} layout="fill" objectFit="cover" />
        </ImageWrapper>
        <TextWrapper>
          <GlobalStyle />
          <SpotName>オムライス</SpotName>
          <SpotExplanation>{spot}</SpotExplanation>
        </TextWrapper>
      </SpotContent>
    </>
  );
};
export default Spot;

const SpotContent = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  gap: 0px;
  grid-template-rows: repeat(2, 1fr);
  border-radius: 50px;
  min-height: 400px;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  position: relative;
`;

const TextWrapper = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  margin: 0;
  background-color: ${colors.Write};
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 0px 0px 10px 10px;
`;

const SpotName = styled.div`
  margin: 0;
  width: 100%;
  font-family: Noto Serif JP;
  font-weight: bold;
  white-space: nowrap;
  font-size: 40px;
`;

const SpotExplanation = styled.div`
  margin: 0;
  width: 100%;
  font-family: Noto Serif JP;
  white-space: nowrap;
  font-size: 28px;
`;