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
        <img src="/assets/nonhover.svg" alt="img-nonhover-yes" />
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
`;

const ButtonContent = styled.div`
  width: 330px;
  height: 330px;
  position: relative;

  :hover {
    src="/assets/hover.svg"
  };
`;

const ButtonText = styled.p`
  font-size: 64px;
  font-family: serif;
  position: absolute;
  margin: 0;
  top: 33%;
  left: 32%;
`;
