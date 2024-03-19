import { paths } from "../../../paths";
import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "@/colors";
import Image from "next/image";

const ReturnButton = ({onClick}) => {
  const router = useRouter();
  const locationId = router.query.locationId;

  return (
    <ButtonWrapper>
      <PageButtonIndex onClick={onClick}>
        <ButtonTextWrapper>前の画面に戻る</ButtonTextWrapper>
        <ImageWrapper>
          <Image src={"/Utils/Replay.png"} width={32} height={32} />
        </ImageWrapper>
      </PageButtonIndex>
    </ButtonWrapper>
  );
};
export default ReturnButton;

const ButtonWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  z-index: 5;
  position: relative;
`;

const PageButtonIndex = styled.button`
  font-size: 36px;
  min-width: 300px;
  max-width: 100%;
  width: calc(100/3)%;
  text-align: center;
  background-color: ${colors.Write};
  border-radius: 25px;
  border: solid #77782e 2px;
  color: #77782e;
  font-family: serif;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: baseline;
  gap: 16px;

  @media (max-width: 500px) {
    width: 100%;
    min-width: 150px;
  }
`;

const ButtonTextWrapper = styled.p`
  margin: 0;
  font-size: 32px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

