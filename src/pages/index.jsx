import { paths } from "../paths";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "../components/title/Button";

const IndexPage = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question1);
  };

  return (
    <AllWrapper>
      <Image src={"/Background.png"} layout="fill" />
      <TextWrapper>
        <Title>Travel Recommending App</Title>
        <Button buttonText="診断開始" onClick={onClick} />
      </TextWrapper>
    </AllWrapper>
  );
};
export default IndexPage;

const AllWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  text-align: center;
`;

const TextWrapper = styled.div`
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
`;
