import { paths } from "../../paths";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ChoiceYes } from "../../components/Atoms/choice/yes";
import { ChoiceNo } from "../../components/Atoms/choice/no";
import Progress from "../../components/Molecule/progress";
import Background from "@/components/Molecule/Background/Background";

const Question1Page = () => {
  const router = useRouter();
  const onClickYes = () => {
    router.replace(
      {
        pathname: paths.question2,
        query: {
          shrine1: 0,
          shrine2: 0,
          shrine3: 1,
          shrine4: 0,
          shrine5: 1,
          shrine6: 1,
        },
      },
      paths.question2
    );
  };

  const onClickNo = () => {
    router.replace(
      {
        pathname: paths.question2,
        query: {
          shrine1: 1,
          shrine2: 1,
          shrine3: 0,
          shrine4: 1,
          shrine5: 0,
          shrine6: 0,
        },
      },
      paths.question2
    );
  };

  return (
    <>
      <Question1Content>
        <Background>
          <AllWrapper>
            <ContentWrapper>
              <Question1TextWrapper>
                <Question1Text>新しい出会いに対して積極的ですか？</Question1Text>
              </Question1TextWrapper>
              <QuestionProgress>
                <Progress num={1} />
              </QuestionProgress>
              <Question1Choices>
                <Button onClick={onClickYes}>
                  <ChoiceYes />
                </Button>
                <Button onClick={onClickNo}>
                  <ChoiceNo />
                </Button>
              </Question1Choices>
            </ContentWrapper>
          </AllWrapper>
        </Background>
      </Question1Content>
    </>
  );
};

export default Question1Page;

const Question1Content = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 16px);
  > img {
    vertical-align: bottom;
  }
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
