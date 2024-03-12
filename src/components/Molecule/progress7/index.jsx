import styled from "styled-components";
import React from "react";
import MarklogoNow from "../../Atoms/progress/defaultnow";
import Doneline from "../../Atoms/progress/progressdoneline";
import MarklogoDone from "../../Atoms/progress/done";

export const Progressseventh = () => {
  return (
    <ProgressseventhWrapper>
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
      <MarklogoDone />
      <Doneline />
      <MarklogoNow />
    </ProgressseventhWrapper>
  );
};
export default Progressseventh;

const ProgressseventhWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  gap: 8px;
  width: fit-content;
`;
