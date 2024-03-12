import { paths } from "../../../paths";
import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "@/colors";
import Image from "next/image";
import { useEffect } from "react";

const LeftContents = ({ locationId, setOpen }) => {
  return (
    <LeftExplanation>
      <Image src={"/Kyoto.jpg"} layout="fill" objectFit="cover" />
      <CenterBelt>
        <MiddleText>あなたにおすすめの神社は</MiddleText>
        <ShrineNameText>{locationId}</ShrineNameText>
        <ButtonWrapper>
          <DetailLinkButton onClick={() => { setOpen(true) }}>詳しく見る</DetailLinkButton>
        </ButtonWrapper>
      </CenterBelt>
    </LeftExplanation>
  );
};

export default LeftContents;

const LeftExplanation = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
`;

const CenterBelt = styled.div`
  z-index: 20;
  box-sizing: border-box;
  display: flex;
  position: absolute;
  width: 100%;
  margin: auto;
  flex-direction: column;
  background-color: rgba(109, 197, 198, 0.8);
  padding: 20px 0px;
  > p {
    font-family: serif;
  }
`;

const MiddleText = styled.p`
  margin: 0;
  font-size: 36px;
  width: 100%;
  text-align: center;
`;

const ShrineNameText = styled.p`
  margin: 0;
  font-size: 64px;
  width: 100%;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const DetailLinkButton = styled.button`
  width: 50%;
  height: 50px;
  min-width: 200px;
  text-align: center;
  border-radius: 25px;
  border: solid #217475 2px;
  color: #217475;
  font-family: serif;
  font-size: 24px;
  @media (max-width: 300px) {
    width: 100%;
    min-width: 150px;
  }
`;
