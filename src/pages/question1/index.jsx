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
        <Image src={"/Utils/logo.svg"} width={400} height={200} />
      </HeaderLogo>
      <Question1Content>
        <AllWrapper>
          <Image src="/Background.png" layout="fill" objectFit="fill" />
          <ContentWrapper>
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
          </ContentWrapper>
        </AllWrapper>
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
  box-sizing: border-box;
  top: 0;
  left: 0;
  bottom: 0;
  height: calc(100vh - 16px);
  padding: 4% 13%;
  > img {
    vertical-align: bottom;
  }
  @media (max-width: 800px) {
    padding: 10% 3%;
    overflow-y: hidden;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const AllWrapper = styled.div`
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  border: solid #eee4cb 5px;
  border-radius: 5px;
  overflow-y: auto;
  background: rgba(250, 250, 250, 1);

  @media (max-width: 600px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: none;
  }
`;

const QuestionProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Question1TextWrapper = styled.div`
  border-bottom: solid 2px rgba(176, 176, 137, 1);
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
  justify-content: center;
  height: 330px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Button = styled.a`
  @media (max-width: 768px) {
    text-align: -webkit-center;
  }
`;
