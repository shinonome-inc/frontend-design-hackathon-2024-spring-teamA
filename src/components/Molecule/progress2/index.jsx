import styled from "styled-components";
import React from "react";
import MarklogoNow from "../../Atoms/progress/defaultnow";
import Progressline from "../../Atoms/progress/progressline";
import Marklogo from "../../Atoms/progress/default";
import Doneline from "../../Atoms/progress/progressdoneline";
import MarklogoDone from "../../Atoms/progress/done";

export const Progresssecond = () => {
  return (
    <ProgresssecondWrapper>
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
    </ProgresssecondWrapper>
  );
};
export default Progresssecond;

const ProgresssecondWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  gap: 8px;
  width: fit-content;
`;
