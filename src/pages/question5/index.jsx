import { paths } from "../../paths";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ChoiceYes } from "../../components/Atoms/choice/yes";
import { ChoiceNo } from "../../components/Atoms/choice/no";
import Progress from "../../components/Molecule/progress";
import Background from "@/components/Molecule/Background/Background";

const Question5Page = () => {
  const router = useRouter();
  const onClickYes = () => {
    setTimeout(() => {}, "2500");
    router.push({ pathname: paths.question6, query: {
      shrine1: Number(router.query.shrine1),
      shrine2: Number(router.query.shrine2),
      shrine3: Number(router.query.shrine3) + 1,
      shrine4: Number(router.query.shrine4) + 1,
      shrine5: Number(router.query.shrine5) + 1,
      shrine6: Number(router.query.shrine6) + 1,
    }}, paths.question6);
  };
  const onClickNo = () => {
    setTimeout(() => {}, "2500");
    router.push({ pathname: paths.question6, query: {
      shrine1: Number(router.query.shrine1) + 1,
      shrine2: Number(router.query.shrine2) + 1,
      shrine3: Number(router.query.shrine3),
      shrine4: Number(router.query.shrine4),
      shrine5: Number(router.query.shrine5),
      shrine6: Number(router.query.shrine6),
    } }, paths.question6);
  };

  return (
    <>
      <Question5Content>
        <Background>
          <AllWrapper>
            <ContentWrapper>
              <Question5TextWrapper>
                <Question5Text>直近で重要な決断や大きな勝負事をする予定がありますか？</Question5Text>
              </Question5TextWrapper>
              <QuestionProgress>
                <Progress num={5} />
              </QuestionProgress>
              <Question5Choices>
                <Button onClick={onClickYes}>
                  <ChoiceYes />
                </Button>
                <Button onClick={onClickNo}>
                  <ChoiceNo />
                </Button>
              </Question5Choices>
            </ContentWrapper>
          </AllWrapper>
        </Background>
      </Question5Content>
    </>
  );
};

export default Question5Page;

const Question5Content = styled.div`
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

const Question5TextWrapper = styled.div`
  border-bottom: solid 2px rgba(176, 176, 137, 1);
`;

const Question5Text = styled.p`
  text-align: center;
  margin: 0 0 1px 0;
  color: rgba(72, 72, 9, 1);
  font-size: 48px;
  font-family: serif;
`;

const Question5Choices = styled.div`
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
