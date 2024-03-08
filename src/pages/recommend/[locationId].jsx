import { paths } from '../../paths';
import { useRouter } from "next/router";
import styled from 'styled-components';
import { colors } from '@/colors';
import Explanation from './explanation';

const RecommendPage = () => {
  const router = useRouter();
  const locationId = router.query.locationId;
  const onClick = () => {
    router.push(paths.index);
  }
  return (
    <AllWrapper>
      <Explanation lid={locationId}/>
      <button onClick={onClick}>スタートに戻る</button>
    </AllWrapper>
  );
};

export default RecommendPage;

const AllWrapper = styled.div`
  background-color: ${colors.Beige};
  width: 100%;
  height: 100%;
  margin: 0;
`;

const RecommendTitle = styled.h1`
  font-size: 96;
  font-weight: Bold;
  font-family: "Noto Sans JP";
  color: ${colors.Blue};
`;