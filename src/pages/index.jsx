import { paths } from '../paths';
import { useRouter } from "next/router";
import React from 'react';
import styled from 'styled-components';

const IndexPage = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question1);
  }

  return (
    <div>
      <h1>Travel Recommending App</h1>
      <Button onClick={onClick}>質問に答える</Button>
    </div>
  );
};

export default IndexPage;

const Button = styled.button`
  width: 50%;
  background-color: green;
`