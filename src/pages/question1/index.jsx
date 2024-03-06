import { paths } from "../../paths";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Question1Page = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question2);
  };
  return (
    <div>
      <h1>あなたは旅行で何をしたい？</h1>
      <Button onClick={onClick}>観光地の散策</Button>
      <Button onClick={onClick}>美味しいものを食べたい</Button>
      <Button onClick={onClick}>アクティビティを楽しみたい</Button>
      <Button onClick={onClick}>リフレッシュしたい</Button>
    </div>
  );
};

export default Question1Page;

const Button = styled.button`
  width: 50%;
  background-color: green;
`;
