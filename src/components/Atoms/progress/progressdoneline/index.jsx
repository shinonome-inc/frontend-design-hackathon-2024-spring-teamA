import styled from "styled-components";
import React from "react";

export const Doneline = () => {
  return (
    <DonelineMark>
      <img
        src="/assets/progress-line-done.svg"
        alt="img-default-progress-line-done"
      />
    </DonelineMark>
  );
};
export default Doneline;

const DonelineMark = styled.div`
  width: 78px;
  margin: auto;
`;
