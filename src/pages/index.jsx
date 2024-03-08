import { paths } from "../paths";
import { useRouter } from "next/router";
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const IndexPage = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question1);
  };

  return (
    <AllWrapper>
      <Image
        src={"/Background.png"}
        layout="fill"
      />
      <TextWrapper>
        <Title>Travel Recommending App</Title>
        <Button onClick={onClick}>質問に答える</Button>
      </TextWrapper>
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

const AllWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  width: 50%;
  background-color: green;
  justify-self: center;
  margin: 0 auto;
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