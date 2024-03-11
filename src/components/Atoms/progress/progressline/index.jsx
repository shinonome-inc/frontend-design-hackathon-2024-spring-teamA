import styled from "styled-components";
import React from "react";

export const Progressline = () => {
  return (
    <LineMark>
      <img src="/assets/progress-line.svg" alt="img-default-progress-line" />
    </LineMark>
  );
};
export default Progressline;

const LineMark = styled.div`
  width: 78px;
  margin: auto;
`;
