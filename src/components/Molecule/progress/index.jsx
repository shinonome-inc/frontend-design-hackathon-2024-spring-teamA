import styled from "styled-components";
import React from "react";
import MarklogoNow from "../../Atoms/progress/defaultnow";
import Marklogo from "../../Atoms/progress/default";
import MarklogoDone from "@/components/Atoms/progress/done";
import Progressline from "../../Atoms/progress/progressline";
import Doneline from "@/components/Atoms/progress/progressdoneline";

const N = 6;

export const Progress = ({ num }) => {
  const Marks = (i) => {
    if (i < num - 1) {
      return (<MarklogoDone />)
    } else if (i === num - 1) {
      return (<MarklogoNow />)
    } else {
      return (<Marklogo />)
    }
  } 

  const Lines = (i) => {
    if (i < num - 1) {
      return (<Doneline />)
    }
    else if (i < N - 1) {
      return (<Progressline />)
    }
    else {
      return (<></>)
    }
  }

  return (
    <ProgressWrapper>
      {
        [...Array(N)].map((v, i) => {
          return (
            <>
              {Marks(i)}
              {Lines(i)}
            </>)
        })
      }
    </ProgressWrapper>
  );
};
export default Progress;

{/* 
 */}

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  gap: 8px;
  width: fit-content;
`;
