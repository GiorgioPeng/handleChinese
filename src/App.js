import React from "react";
import { useState } from "react";
import GitHubButton from "react-github-btn";
import Filter from "./Filter";
import Phonetic from "./Phonetic";
import Main from "./Main";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { Menu, Icon } from "antd";
const App = () => {
  const [key, setKey] = useState("main");
  const handleClick = e => {
    setKey(e.key);
  };
  const githubButtonInfo = {
    href: "https://github.com/giorgiopeng/handleChinese",
    "datacolor-scheme": "no-preference: light; light: light; dark: dark;",
    "data-size": "large",
    "data-show-count": "true",
    "aria-label": "Star giorgiopeng/handleChinese on GitHub"
  };
  return (
    <div>
      <div className="githubButton">
        <GitHubButton {...githubButtonInfo}>Star</GitHubButton>
      </div>
      <Router>
        <Menu
          mode="horizontal"
          onClick={handleClick}
          selectedKeys={key}
          theme="dark"
        >
          <Menu.Item key="main">
            <Link to="/">
              <Icon type="home" />
              首页
            </Link>
          </Menu.Item>
          <Menu.Item key="phonetic">
            <Link to="/Phonetic">
              <Icon type="file-text" />
              文本注音
            </Link>
          </Menu.Item>
          <Menu.Item key="filter">
            <Link to="/Filter">
              <Icon type="filter" />
              文本过滤
            </Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/Phonetic" component={Phonetic} />
          <Route path="/Filter" component={Filter} />
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
