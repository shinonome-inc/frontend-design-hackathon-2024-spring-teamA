import { paths } from '../../paths';
import { useRouter } from "next/router";
import styled from 'styled-components';
import { colors } from '@/colors';
import Explanation from './explanation';
import Image from 'next/image';

const RecommendPage = () => {
  const router = useRouter();
  const locationId = router.query.locationId;
  const onClick = () => {
    router.push(paths.index);
  }
  return (
    <ResultBody>
      <AllWrapper>
        <Image
          src={"/Background.png"}
          layout="fill"
          objectFit='fill'
        />
        <ExplanationWrapper>
          <Explanation lid={locationId}/>
          <BackIndexButton onClick={onClick}>スタートに戻る</BackIndexButton>
        </ExplanationWrapper>
      </AllWrapper>
    </ResultBody>
  );
};

export default RecommendPage;

const ResultBody = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  padding: 10%;
`;

const AllWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const ExplanationWrapper = styled.div`
  z-index: 10;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const BackIndexButton = styled.button`
  margin: 0;
`;