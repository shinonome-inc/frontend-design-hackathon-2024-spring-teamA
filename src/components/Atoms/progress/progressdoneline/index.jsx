import styled from "styled-components";
import React from "react";

export const Doneline = () => {
  return (
    <DonelineMark>
      <img
        src="/assets/progress-line-done.svg"
        alt="img-default-progress-line-done"
        className="progress-line-done"
      />
    </DonelineMark>
  );
};
export default Doneline;

const DonelineMark = styled.div`
  width: 50px;
  margin: auto;

  @media (max-width: 950px) {
    width: 30px;
  }
  .progress-line-done {
    width: 50px;

    @media (max-width: 950px) {
      width: 30px;
    }
  }
`;
