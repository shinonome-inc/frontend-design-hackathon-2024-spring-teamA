import { paths } from '../../paths';
import { useRouter } from "next/router";

const Question3Page = () => {
  const router = useRouter();
  const onClick = () => {
    const eachPath = paths.recommend + "/garden";
    router.push(eachPath);
  }
  return (
    <div>
      <h1>question3</h1>
      <button onClick={onClick}>{paths.recommend+"/garden"}</button>
    </div>
  );
};

export default Question3Page;