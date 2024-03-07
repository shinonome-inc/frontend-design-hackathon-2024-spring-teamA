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
    <Question1Container>
      <Question1Wrapper>
        <Question1Content>
          <Question1Text>
            <h1>あなたは旅行で何をしたい？</h1>
          </Question1Text>
          <Question1Choices>
            <Button onClick={onClick}>観光地の散策</Button>
            <Button onClick={onClick}>美味しいものを食べたい</Button>
            <Button onClick={onClick}>アクティビティを楽しみたい</Button>
            <Button onClick={onClick}>リフレッシュしたい</Button>
          </Question1Choices>
        </Question1Content>
        <QuestionProgress>アイコン</QuestionProgress>
      </Question1Wrapper>
    </Question1Container>
  );
};

export default Question1Page;

const Question1Container = styled.div`
  display: flex;
  width: 100%;
`;

const Question1Wrapper = styled.div`
  display: flex;
  width: 1500px;
  height: 800px;
  padding: 80px 140px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  border: 5px solid #dcdcdc;
  background: #fff;
`;

const Question1Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  align-self: stretch;
`;

const QuestionProgress = styled.div`
  display: flex;
  width: 459px;
  justify-content: space-between;
  align-items: center;
`;

const Question1Text = styled.div``;

const Question1Choices = styled.div``;

const Button = styled.button`
  width: 50%;
  background-color: green;
`;
