import styled from "styled-components";
import React from "react";

export const MarklogoDone = () => {
  return (
    <Markdone>
      <img
        src="/assets/defaultdonemark.svg"
        alt="img-default-donemark"
        className="img-donemark"
      />
      <img
        src="/assets/defaultdonehover.svg"
        alt="img-default-donemark-hover"
        className="img-donehover"
      />
    </Markdone>
  );
};
export default MarklogoDone;

const Markdone = styled.div`
  width: 40px;
  height: 40px;
  position: relative;

  .img-donemark {
    left: 0;
    position: absolute;
    width: 100%;
  }

  .img-donehover {
    opacity: 0;
    left: 0;
    transition: opacity 0.7s;
    position: absolute;
  }

  .img-donehover:hover {
    opacity: 1;
  }
`;
