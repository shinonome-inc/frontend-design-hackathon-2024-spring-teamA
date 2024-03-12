import { paths } from "../../paths";
import { useRouter } from "next/router";

const Question3Page = () => {
  const router = useRouter();

  const onClick1 = () => {
    setTimeout(() => {}, "2500");
    const eachPath = paths.diagnosis + "/shrine1";
    router.push(eachPath);
  };

  const onClick2 = () => {
    setTimeout(() => {}, "2500");
    const eachPath = paths.diagnosis + "/shrine2";
    router.push(eachPath);
  };

  const onClick3 = () => {
    setTimeout(() => {}, "2500");
    const eachPath = paths.diagnosis + "/shrine3";
    router.push(eachPath);
  };

  const onClick4 = () => {
    setTimeout(() => {}, "2500");
    const eachPath = paths.diagnosis + "/shrine4";
    router.push(eachPath);
  };

  const onClick5 = () => {
    setTimeout(() => {}, "2500");
    const eachPath = paths.diagnosis + "/shrine5";
    router.push(eachPath);
  };

  const onClick6 = () => {
    setTimeout(() => {}, "2500");
    const eachPath = paths.diagnosis + "/shrine6";
    router.push(eachPath);
  };
  return (
    <div>
      <h1>question3</h1>
      <button onClick={onClick1}>{paths.recommend + "/shrine1"}</button>
      <button onClick={onClick2}>{paths.recommend + "/shrine2"}</button>
      <button onClick={onClick3}>{paths.recommend + "/shrine3"}</button>
      <button onClick={onClick4}>{paths.recommend + "/shrine4"}</button>
      <button onClick={onClick5}>{paths.recommend + "/shrine5"}</button>
      <button onClick={onClick6}>{paths.recommend + "/shrine6"}</button>
    </div>
  );
};

export default Question3Page;
