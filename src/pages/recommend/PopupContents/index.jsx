import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

const PopupContents = ({ setOpen, link }) => {
  const router = useRouter();

  const moveLink = () => {
    router.replace(link);
  };

  return (
    <PopWrapper>
      <MainWrapper>
        <TextWrapper>
          外部リンクページに移動します。<br />
          よろしいでしょうか？
        </TextWrapper>
        <ButtonWrapper>
          <OutsideButton onClick={moveLink}>はい</OutsideButton>
          <ReturnButton onClick={() => { setOpen(false) }}>いいえ</ReturnButton>
        </ButtonWrapper>
      </MainWrapper>
    </PopWrapper>
  );
};
export default PopupContents;

const PopWrapper = styled.div`
  z-index: 50;
  box-sizing: border-box;
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(59, 59, 59, 0.5);
`;

const MainWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  top: 25%;
  bottom: 0;
  margin: auto;
  height: 50%;
  width: 50%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  gap: 5%;
`;

const TextWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-bottom: solid #6DC5C6 2px;
  font-family: serif;
  font-size: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-column: row;
  position: relative;
  height: 72px;
  width: 100%;
  gap: 5%;
  > button {
    position: relative;
    width: 50%;
    border-radius: 36px;
    background-color: #FFFFFF;
    font-family: serif;
    font-size: 40px;  
  }
`;

const OutsideButton = styled.button`
  border: solid #217475 2px;
  color: #217475;
`;

const ReturnButton = styled.button`
border: solid #77782e 2px;
color: #77782e;
`;