import { paths } from "../../paths";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ChoiceYes } from "../../components/Atoms/choice/yes";
import { ChoiceNo } from "../../components/Atoms/choice/no";
import Progressfirst from "../../components/Molecule/progress1";

const Question1Page = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question2);
  };
  return (
    <>
      <HeaderLogo>
        <Image src="/assets/logotitle.png" width={400} height={200} />
      </HeaderLogo>
      <Image src="/Background.png" layout="fill" />
      <Question1Content>
        <Question1TextWrapper>
          <Question1Text>新しい出会いに対して積極的ですか？</Question1Text>
        </Question1TextWrapper>
        <QuestionProgress>
          <Progressfirst />
        </QuestionProgress>
        <Question1Choices>
          <Button onClick={onClick}>
            <ChoiceYes />
          </Button>
          <Button onClick={onClick}>
            <ChoiceNo />
          </Button>
        </Question1Choices>
      </Question1Content>
    </>
  );
};

export default Question1Page;

const HeaderLogo = styled.div`
  margin: 0;
  left: 1%;
  z-index: 100;
  height: 5%;
  width: calc(100% - 16px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
`;

const Question1Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  padding: 8px 14px 16px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  border: 5px solid rgba(219, 210, 188, 1);
  background: #fff;
  gap: 40px;
`;

const QuestionProgress = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Question1TextWrapper = styled.div`
  width: 900px;
  border-bottom: solid 2px rgba(176, 176, 137, 1);

  @media (max-width: 768px) {
    width: 600px;
  }
`;

const Question1Text = styled.p`
  text-align: center;
  margin: 0 0 1px 0;
  color: rgba(72, 72, 9, 1);
  font-size: 48px;
  font-family: serif;
`;

const Question1Choices = styled.div`
  display: flex;
  gap: 112px;
`;

const Button = styled.a``;
