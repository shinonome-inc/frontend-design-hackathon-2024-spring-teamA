import { paths } from "../../paths";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ChoiceYes } from "../../components/Atoms/choice/yes";
import { ChoiceNo } from "../../components/Atoms/choice/no";
import Progress from "../../components/Molecule/progress";
import Background from "@/components/Molecule/Background/Background";

const Question6Page = () => {
  const router = useRouter();

  const queryYes = {
    shrine1: Number(router.query.shrine1) + 1,
    shrine2: Number(router.query.shrine2),
    shrine3: Number(router.query.shrine3) + 1,
    shrine4: Number(router.query.shrine4) + 1,
    shrine5: Number(router.query.shrine5) + 1,
    shrine6: Number(router.query.shrine6) + 1,
  };
  const queryNo = {
    shrine1: Number(router.query.shrine1),
    shrine2: Number(router.query.shrine2) + 1,
    shrine3: Number(router.query.shrine3),
    shrine4: Number(router.query.shrine4),
    shrine5: Number(router.query.shrine5),
    shrine6: Number(router.query.shrine6),
  };

  const onClickYes = () => {
    const maxIndex = Object.values(queryYes).indexOf(Math.max(...Object.values(queryYes))) + 1;
    const query = "shrine" + String(maxIndex);
    setTimeout(() => {}, "2500");
    router.replace({ pathname: paths.diagnosis, query: { locationId: query } }, paths.diagnosis);
  };
  const onClickNo = () => {
    const maxIndex = Object.values(queryNo).indexOf(Math.max(...Object.values(queryNo))) + 1;
    const query = "shrine" + String(maxIndex);
    setTimeout(() => {}, "2500");
    router.replace({ pathname: paths.diagnosis, query: { locationId: query } }, paths.diagnosis);
  };
  return (
    <>
      <Question6Content>
        <Background>
          <AllWrapper>
            <ContentWrapper>
              <Question6TextWrapper>
                <Question6Text>最近何か運が悪いなと感じたことはありますか？</Question6Text>
              </Question6TextWrapper>
              <QuestionProgress>
                <Progress num={6} />
              </QuestionProgress>
              <Question6Choices>
                <Button onClick={onClickYes}>
                  <ChoiceYes />
                </Button>
                <Button onClick={onClickNo}>
                  <ChoiceNo />
                </Button>
              </Question6Choices>
            </ContentWrapper>
          </AllWrapper>
        </Background>
      </Question6Content>
    </>
  );
};
export default Question6Page;

const Question6Content = styled.div`
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

const Question6TextWrapper = styled.div`
  border-bottom: solid 2px rgba(176, 176, 137, 1);
`;

const Question6Text = styled.p`
  text-align: center;
  margin: 0 0 1px 0;
  color: rgba(72, 72, 9, 1);
  font-size: 48px;
  font-family: serif;
`;

const Question6Choices = styled.div`
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
