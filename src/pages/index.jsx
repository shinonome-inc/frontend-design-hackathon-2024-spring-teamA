import { paths } from "../paths";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const IndexPage = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question1);
  };

  return (
    <AllWrapper>
      <Image src="/Kyoto.jpg" layout="responsive" width={1920} height={1080} />
      <Background>
        <h1>Travel Recommending App</h1>
        <Button onClick={onClick}>質問に答える</Button>
      </Background>
    </AllWrapper>
  );
};

export default IndexPage;

const AllWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0;
  margin: 0;
`;

const Button = styled.button`
  width: 50%;
  background-color: green;
`;

const Background = styled.div`
  top: 40%;
  left: 40%;
  position: absolute;
`;

const BgImage = styled.img`
  width: 100%;
`;
