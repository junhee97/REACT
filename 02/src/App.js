import logo from './logo.svg';
import './App.css';

import { Element1, Element2 } from "./01JSX/JSX_Basic"
import { Element3 } from "./01JSX/JSX_Basic"
import { Element4 } from "./01JSX/JSX_Basic"
import { Element5 } from "./01JSX/JSX_Basic"
import CustomComponent from "./01JSX/CustomComponent";

import DEFAULT from "./01JSX/JSX_Basic"

// 이벤트 확인
import { Component_01 } from './01JSX/JSX_Event';
import { Component_02 } from './01JSX/JSX_Event';
import { Component_03 } from './01JSX/JSX_Event';

function App() {
  const headerTitle = "HEADER TITLE";
  const mainContents = "MAIN CONTENTS";
  return (
    <div className="App">
      <div className="header" style={{ fontSize: "30px", backgroundColor: "aquamarine", color: "white" }}>
        {/* {headerTitle}
        <Element1 />
        <Element2 /> */}
      </div>
      <div className="main">{mainContents}</div>
      <div className="footer" style={{color: "bisque"}}>
        {/* <Element3 auth={"ROLE_ADMIN"} name={"J"} />
        <hr />
        <Element4 auth={"ROLE_USER"} name={"J"} />
        <hr />
        <Element5 list = {['aaa', 'bbb', 'ccc']} />
        <hr />
        <DEFAULT.DefaultComponent1 />
        <DEFAULT.DefaultComponent2 />
        <hr />
        <CustomComponent/> */}

        <Component_01 />
        <Component_02 />
        <Component_03 />
      </div>
    </div>
  );

}

export default App;
