import React from "react";
import { Icon, Input, Menu } from "semantic-ui-react";
import LoginRegister from "./LoginRegister";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Menu.Item name="HRMS">
          <Icon color="grey" name=" header" />
        </Menu.Item>
        <Menu.Item name="home">
          <Icon color="blue" name="home" />
        </Menu.Item>
        <Menu.Item name="companys">
          <Icon color="teal" name="users" />
        </Menu.Item>
        <Menu.Item name="social">
          <Icon color="yellow" name="  paper plane" />
        </Menu.Item>
        <Menu.Item name=" help">
          <Icon name="help" />
        </Menu.Item>
        <Menu.Item position="right">
          <Input className="icon" icon="search" placeholder="Ara..." />
        </Menu.Item>
        <Menu.Item>
          <LoginRegister />
        </Menu.Item>
      </Menu>
    </div>
  );
}
