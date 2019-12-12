import React from "react";
import Filter from "./Filter";
import Phonetic from "./Phonetic";
import Main from "./Main";
import Missing from "./Missing";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Menu, Icon } from "antd";
const App = () => {
  return (
    <div>
      <Router>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/">
              <Icon type="setting" />
              首页
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/Phonetic">
              <Icon type="setting" />
              文本注音
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/Filter">
              <Icon type="mail" />
              文本过滤
            </Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/Phonetic" component={Phonetic} />
          <Route path="/Filter" component={Filter} />
          <Route component={Missing} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
