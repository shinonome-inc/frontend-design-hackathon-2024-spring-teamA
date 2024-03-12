import styled from "styled-components";
import React from "react";
import MarklogoNow from "../../Atoms/progress/defaultnow";
import Progressline from "../../Atoms/progress/progressline";
import Marklogo from "../../Atoms/progress/default";
import Doneline from "../../Atoms/progress/progressdoneline";
import MarklogoDone from "../../Atoms/progress/done";

export const Progresssixth = () => {
  return (
    <ProgresssixthWrapper>
      <MarklogoDone />
      <Doneline />
      <MarklogoDone />
      <Doneline />
      <MarklogoDone />
      <Doneline />
      <MarklogoDone />
      <Doneline />
      <MarklogoDone />
      <Doneline />
      <MarklogoNow />
      <Progressline />
      <Marklogo />
    </ProgresssixthWrapper>
  );
};
export default Progresssixth;

const ProgresssixthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  gap: 8px;
  width: fit-content;
`;
