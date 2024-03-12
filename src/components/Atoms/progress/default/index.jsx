import styled from "styled-components";
import React from "react";

export const Marklogo = () => {
  return (
    <Mark>
      <img src="/assets/defaultmark.svg" alt="img-default-mark" />
    </Mark>
  );
};
export default Marklogo;

const Mark = styled.div`
  width: 40px;
  height: 40px;
`;
