import styled from "styled-components";
import React from "react";
import MarklogoNow from "../../Atoms/progress/defaultnow";
import Progressline from "../../Atoms/progress/progressline";
import Marklogo from "../../Atoms/progress/default";
import Doneline from "../../Atoms/progress/progressdoneline";
import MarklogoDone from "../../Atoms/progress/done";

export const Progressfifth = () => {
  return (
    <ProgressfifthWrapper>
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
    </ProgressfifthWrapper>
  );
};
export default Progressfifth;

const ProgressfifthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  gap: 8px;
  width: fit-content;
`;
