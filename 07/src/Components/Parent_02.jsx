import { useState, useContext } from "react";
import Son_02 from "./Son_02";
import MyContext from "./MyContext";

// 하위 컴포넌트 -> 상위 컴포넌트 전달(CallBack 함수 전달)
const Parent_02 = () => {
  const [name, setName] = useState("K");
  const { globalState, setGlobalState } = useContext(MyContext); // PROVIDER에서 관리하는 상태값
  const handleNameChange = (name) => {
    setName(name);
  };

  return (
    <div>
      <h1>Parent_02</h1>
      전역변수 : {globalState} <br />
      전역변수 변경 : <button>변경하기</button> <br />
      부모가 가지는 상태값 : {name} <br />
      <hr />
      <Son_02 name={name} handleNameChange={handleNameChange} />
    </div>
  );
};

export default Parent_02;
