import styled from "styled-components";
import React from "react";
import { paths } from "../../../../paths";
import { useRouter } from "next/router";

export const ChoiceYes = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question2);
  };
  return (
    <Button onClick={onClick}>
      <ButtonContent>
        <img
          src="/assets/nonhover.svg"
          alt="img-nonhover-yes"
          className="img-nonhover"
        />
        <img
          src="/assets/hover.svg"
          alt="img-hover-yes"
          className="img-hover"
        />
        <ButtonText>はい</ButtonText>
      </ButtonContent>
    </Button>
  );
};
export default ChoiceYes;

const Button = styled.button`
  display: block;
  border: none;
  outline: none;
  background: transparent;
  width: 333px;
  height: 308px;
  padding: 0;
`;

const ButtonContent = styled.div`
  width: 330px;
  height: 330px;
  position: relative;
  cursor: pointer;

  .img-nonhover {
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .img-hover {
    opacity: 0;
    left: 0;
    transition: opacity 0.7s;
    position: absolute;
  }

  .img-hover:hover {
    opacity: 1;
  }
`;

const ButtonText = styled.p`
  font-size: 64px;
  font-family: serif;
  position: absolute;
  margin: 0;
  top: 33%;
  left: 32%;
`;
