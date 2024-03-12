import styled from "styled-components";
import React from "react";
import MarklogoNow from "../../Atoms/progress/defaultnow";
import Progressline from "../../Atoms/progress/progressline";
import Marklogo from "../../Atoms/progress/default";
import Doneline from "../../Atoms/progress/progressdoneline";
import MarklogoDone from "../../Atoms/progress/done";

export const Progressthird = () => {
  return (
    <ProgressthirdWrapper>
      <MarklogoDone />
      <Doneline />
      <MarklogoDone />
      <Doneline />
      <MarklogoNow />
      <Progressline />
      <Marklogo />
      <Progressline />
      <Marklogo />
      <Progressline />
      <Marklogo />
      <Progressline />
      <Marklogo />
    </ProgressthirdWrapper>
  );
};
export default Progressthird;

const ProgressthirdWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  gap: 8px;
  width: fit-content;
`;
