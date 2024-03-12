import styled from "styled-components";
import React from "react";

export const Progressline = () => {
  return (
    <LineMark>
      <img
        src="/assets/progress-line.svg"
        alt="img-default-progress-line"
        className="progress-line"
      />
    </LineMark>
  );
};
export default Progressline;

const LineMark = styled.div`
  width: 50px;
  margin: auto;

  @media (max-width: 768px) {
    width: 30px;
  }
  .progress-line {
    width: 50px;

    @media (max-width: 768px) {
      width: 30px;
    }
  }
`;
