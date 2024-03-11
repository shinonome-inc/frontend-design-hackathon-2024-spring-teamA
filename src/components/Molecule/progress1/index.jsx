import styled from "styled-components";
import React from "react";
import MarklogoNow from "../../Atoms/progress/defaultnow";
import Progressline from "../../Atoms/progress/progressline";
import Marklogo from "../../Atoms/progress/default";

export const Progressfirst = () => {
  return (
    <ProgressfirstWrapper>
      <MarklogoNow />
      <Progressline />
      <Marklogo />
      <Progressline />
      <Marklogo />
      <Progressline />
      <Marklogo />
      <Progressline />
      <Marklogo />
      <Progressline />
      <Marklogo />
      <Progressline />
      <Marklogo />
    </ProgressfirstWrapper>
  );
};
export default Progressfirst;

const ProgressfirstWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  gap: 8px;
  width: fit-content;
`;
