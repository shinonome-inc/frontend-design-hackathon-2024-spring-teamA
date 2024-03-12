import styled from "styled-components";
import React from "react";

export const MarklogoNow = () => {
  return (
    <Marknow>
      <img
        src="/assets/nowmark.svg"
        alt="img-default-now"
        className="img-nowmark"
      />
      <img
        src="/assets/nowmarkhover.svg"
        alt="img-default-now-hover"
        className="img-nowmarkhover"
      />
    </Marknow>
  );
};
export default MarklogoNow;

const Marknow = styled.div`
  width: 40px;
  height: 40px;
  position: relative;

  .img-nowmark {
    left: 0;
    position: absolute;
    width: 40px;
    height: 40px;
  }

  .img-nowmarkhover {
    opacity: 0;
    left: 0;
    transition: opacity 0.7s;
    position: absolute;
    width: 40px;
    height: 40px;
  }

  .img-nowmarkhover:hover {
    opacity: 1;
  }
`;
