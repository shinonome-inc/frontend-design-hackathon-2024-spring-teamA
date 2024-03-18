import { paths } from "../../paths";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ChoiceYes } from "../../components/Atoms/choice/yes";
import { ChoiceNo } from "../../components/Atoms/choice/no";
import Progress from "../../components/Molecule/progress";
import Background from "@/components/Molecule/Background/Background";

const Question3Page = () => {
  const router = useRouter();
  setTimeout(() => {}, "400");
  const onClickYes = () => {
    router.replace(
      {
        pathname: paths.question4,
        query: {
          shrine1: Number(router.query.shrine1),
          shrine2: Number(router.query.shrine2) + 1,
          shrine3: Number(router.query.shrine3),
          shrine4: Number(router.query.shrine4),
          shrine5: Number(router.query.shrine5) + 1,
          shrine6: Number(router.query.shrine6) + 1,
        },
      },
      paths.question4
    );
  };
  const onClickNo = () => {
    router.replace(
      {
        pathname: paths.question4,
        query: {
          shrine1: Number(router.query.shrine1) + 1,
          shrine2: Number(router.query.shrine2),
          shrine3: Number(router.query.shrine3) + 1,
          shrine4: Number(router.query.shrine4) + 1,
          shrine5: Number(router.query.shrine5),
          shrine6: Number(router.query.shrine6),
        },
      },
      paths.question4
    );
  };

  return (
    <>
      <Question3Content>
        <Background>
          <AllWrapper>
            <ContentWrapper>
              <Question3TextWrapper>
                <Question3Text>新しい出会いに対して積極的ですか？</Question3Text>
              </Question3TextWrapper>
              <QuestionProgress>
                <Progress num={3} />
              </QuestionProgress>
              <Question3Choices>
                <Button onClick={onClickYes}>
                  <ChoiceYes />
                </Button>
                <Button onClick={onClickNo}>
                  <ChoiceNo />
                </Button>
              </Question3Choices>
            </ContentWrapper>
          </AllWrapper>
        </Background>
      </Question3Content>
    </>
  );
};

export default Question3Page;

const Question3Content = styled.div`
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

const Question3TextWrapper = styled.div`
  border-bottom: solid 2px rgba(176, 176, 137, 1);
`;

const Question3Text = styled.p`
  text-align: center;
  margin: 0 0 1px 0;
  color: rgba(72, 72, 9, 1);
  font-size: 48px;
  font-family: serif;
`;

const Question3Choices = styled.div`
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
