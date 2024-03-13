// import { paths } from "../../paths";
// import { useRouter } from "next/router";

// const Question3Page = () => {
//   const router = useRouter();

//   const onClick1 = () => {
//     setTimeout(() => {}, "2500");
//     const eachPath = paths.diagnosis + "/shrine1";
//     router.push(eachPath);
//   };

//   const onClick2 = () => {
//     setTimeout(() => {}, "2500");
//     const eachPath = paths.diagnosis + "/shrine2";
//     router.push(eachPath);
//   };

//   const onClick3 = () => {
//     setTimeout(() => {}, "2500");
//     const eachPath = paths.diagnosis + "/shrine3";
//     router.push(eachPath);
//   };

//   const onClick4 = () => {
//     setTimeout(() => {}, "2500");
//     const eachPath = paths.diagnosis + "/shrine4";
//     router.push(eachPath);
//   };

//   const onClick5 = () => {
//     setTimeout(() => {}, "2500");
//     const eachPath = paths.diagnosis + "/shrine5";
//     router.push(eachPath);
//   };

//   const onClick6 = () => {
//     setTimeout(() => {}, "2500");
//     const eachPath = paths.diagnosis + "/shrine6";
//     router.push(eachPath);
//   };
//   return (
//     <div>
//       <h1>question3</h1>
//       <button onClick={onClick1}>{paths.recommend + "/shrine1"}</button>
//       <button onClick={onClick2}>{paths.recommend + "/shrine2"}</button>
//       <button onClick={onClick3}>{paths.recommend + "/shrine3"}</button>
//       <button onClick={onClick4}>{paths.recommend + "/shrine4"}</button>
//       <button onClick={onClick5}>{paths.recommend + "/shrine5"}</button>
//       <button onClick={onClick6}>{paths.recommend + "/shrine6"}</button>
//     </div>
//   );
// };

import { paths } from "../../paths";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ChoiceYes } from "../../components/Atoms/choice/yes";
import { ChoiceNo } from "../../components/Atoms/choice/no";
import Progressfirst from "../../components/Molecule/progress1";

const Question3Page = () => {
  const router = useRouter();

  const queryYes = {
    shrine1: Number(router.query.shrine1),
    shrine2: Number(router.query.shrine2) + 1,
    shrine3: Number(router.query.shrine3),
    shrine4: Number(router.query.shrine4),
    shrine5: Number(router.query.shrine5) + 1,
    shrine6: Number(router.query.shrine6) + 1,
  };
  const queryNo = {
    shrine1: Number(router.query.shrine1) + 1,
    shrine2: Number(router.query.shrine2),
    shrine3: Number(router.query.shrine3) + 1,
    shrine4: Number(router.query.shrine4) + 1,
    shrine5: Number(router.query.shrine5),
    shrine6: Number(router.query.shrine6),
  };
  // const onClickYes = () => {
  //   const query = [...queryYes];
  //   console.log(query);
  //   router.push({ pathname: paths.question3, query: queryYes }, paths.question3);
  // };
  // const onClickNo = () => {
  //   router.push({ pathname: paths.question3, query: queryNo }, paths.question3);
  // };

  const onClickYes = () => {
    const maxIndex = Object.values(queryYes).indexOf(Math.max(...Object.values(queryYes)));
    console.log(queryYes);
    console.log(Math.max(...Object.values(queryYes)));
    const query = "shrine" + String(maxIndex);
    console.log(query);
    setTimeout(() => {}, "2500");
    const eachPath = paths.diagnosis + "/" + query;
    router.push(eachPath);
  };
  const onClickNo = () => {
    const maxIndex = Object.values(queryNo).indexOf(Math.max(...Object.values(queryNo)));
    const query = "shrine" + String(maxIndex);
    console.log(query);
    setTimeout(() => {}, "2500");
    const eachPath = paths.diagnosis + "/" + query;
    router.push(eachPath);
  };
  return (
    <>
      <HeaderLogo>
        <Image src={"/Utils/logo.svg"} width={400} height={200} />
      </HeaderLogo>
      <Question3Content>
        <AllWrapper>
          <Image src="/Background.png" layout="fill" objectFit="fill" />
          <ContentWrapper>
            <Question3TextWrapper>
              <Question3Text>新しい出会いに対して積極的ですか？</Question3Text>
            </Question3TextWrapper>
            <QuestionProgress>
              <Progressfirst />
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
      </Question3Content>
    </>
  );
};
export default Question3Page;

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

const Question3Content = styled.div`
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
