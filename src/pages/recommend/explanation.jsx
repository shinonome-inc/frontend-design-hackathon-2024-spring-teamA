import styled from 'styled-components';
import { colors } from '@/colors';

const Explanation = (props) => {
  return (
    <Wrapper>
      <RecommendTitle>診断結果</RecommendTitle>
      <Location>場所{props.lid}</Location>
      <ExplanationText>説明</ExplanationText>
    </Wrapper>
  );
};

export default Explanation;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const RecommendTitle = styled.h1`
  font-size: 96px;
  font-weight: Bold;
  font-family: "Noto Sans JP";
  color: ${colors.Blue};
  margin: 0;
`;

const Location = styled.p`
  margin: 0;
  font-size: 64px;
  font-weight: Bold;
  font-family: "Noto Sans JP";
  color: ${colors.Black};
`;

const ExplanationText = styled.p`
  margin: 0;
  font-size: 42px;
  font-family: "Noto Sans JP";
  color: ${colors.Black};
`;