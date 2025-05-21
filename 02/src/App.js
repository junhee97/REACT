import logo from './logo.svg';
import './App.css';

import { Element1, Element2 } from "./01JSX/JSX_Basic"
import { Element3 } from "./01JSX/JSX_Basic"
import { Element4 } from "./01JSX/JSX_Basic"

function App() {
  const headerTitle = "HEADER TITLE";
  const mainContents = "MAIN CONTENTS";
  return (
    <div className="App">
      <div className="header" style={{ fontSize: "30px", backgroundColor: "aquamarine", color: "white" }}>
        {headerTitle}
        <Element1 />
        <Element2 />
      </div>
      <div className="main">{mainContents}</div>
      <div className="footer">
        <Element3 auth={"ROLE_ADMIN"} name={"J"} />
        <hr />
        <Element4 auth={"ROLE_USER"} name={"J"} />
      </div>
    </div>
  );

}

export default App;
