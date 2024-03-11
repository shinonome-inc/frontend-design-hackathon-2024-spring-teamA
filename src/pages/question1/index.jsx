import { paths } from "../../paths";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { ChoiceYes } from "../../components/Atoms/choice/yes";
import { ChoiceNo } from "../../components/Atoms/choice/no";

const Question1Page = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question2);
  };
  return (
    <Question1Wrapper>
      <HeaderLogo>
        <LogoImage src={"assets/logotitle.png"} />
      </HeaderLogo>
      <Question1Content>
        <Question1TextWrapper>
          <Question1Text>1人で過ごすほうが気楽でいい</Question1Text>
        </Question1TextWrapper>
        <QuestionProgress>アイコン</QuestionProgress>
        <Question1Choices>
          <Button onClick={onClick}>
            <ChoiceYes />
          </Button>
          <Button onClick={onClick}>
            <ChoiceNo />
          </Button>
        </Question1Choices>
      </Question1Content>
    </Question1Wrapper>
  );
};

export default Question1Page;

const Question1Wrapper = styled.div`
  background-image: url("/background.png");
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const HeaderLogo = styled.header`
  display: flex;
  width: 100%;
  padding: 16px 24px;
  background-color: rgba(183, 205, 205, 1);
`;

const LogoImage = styled.img`
  height: 40px;
`;

const Image = styled.img`
  position: fixed;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
`;

const Question1Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  padding: 80px 140px 160px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  border: 5px solid #dcdcdc;
  background: #fff;
`;

const QuestionProgress = styled.div`
  display: flex;
  width: 459px;
  justify-content: space-between;
  align-items: center;
`;

const Question1TextWrapper = styled.div`
  width: 900px;
  border-bottom: solid 2px rgba(176, 176, 137, 1);
`;

const Question1Text = styled.p`
  text-align: center;
  margin: 0 0 1px 0;
  color: rgba(176, 176, 131, 1);
  font-size: 48px;
  font-family: serif;
`;

const Question1Choices = styled.div`
  display: flex;
  gap: 112px;
`;

const Button = styled.a``;
