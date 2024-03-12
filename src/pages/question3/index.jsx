import { paths } from '../../paths';
import { useRouter } from "next/router";

const Question3Page = () => {
  const router = useRouter();
  const onClick = ({query}) => {
    const eachPath = paths.diagnosis + query;
    router.push(eachPath);
  }
  return (
    <div>
      <h1>question3</h1>
      <button onClick={onClick("/shrine1")}>{paths.recommend+"/shrine1"}</button>
      <button onClick={onClick("/shrine2")}>{paths.recommend+"/shrine2"}</button>
      <button onClick={onClick("/shrine3")}>{paths.recommend+"/shrine3"}</button>
      <button onClick={onClick("/shrine4")}>{paths.recommend+"/shrine4"}</button>
      <button onClick={onClick("/shrine5")}>{paths.recommend+"/shrine5"}</button>
      <button onClick={onClick("/shrine6")}>{paths.recommend+"/shrine6"}</button>
    </div>
  );
};

export default Question3Page;