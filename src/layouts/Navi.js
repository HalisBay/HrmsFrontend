import React, { useState } from "react";
import {NavLink } from "react-router-dom";
import {Dropdown, Icon, Input, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory()
  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/")
  }
  function handleSignIn() {
    setIsAuthenticated(true);
    
  }
  return (
    <div>
      <Menu  inverted fixed="top">
        <Menu.Item  name="HRMS"  exact as={NavLink} to = "/about-us"  >
          <Icon color="grey" name=" header" />
        </Menu.Item>
        <Menu.Item name="home" exact as={NavLink} to ="/">
          <Icon color="blue" name="home" />
        </Menu.Item>
        <Menu.Item name="companys" exact as={NavLink} to="/employers">
          <Icon color="teal" name="users" />
        </Menu.Item>
        <Menu.Item>
        <Dropdown  icon =" yellow paper plane" pointing="top left">
          <Dropdown.Menu>
            <Dropdown.Item ><Icon name="github"/> Github </Dropdown.Item>
          
          </Dropdown.Menu>
        </Dropdown>
        </Menu.Item>
        <Menu.Item name=" help" exact as={NavLink} to="/questions">
          <Icon name="help" />
        </Menu.Item>
        <Menu.Item position="right">
          <Input className="icon" icon="search" placeholder="Ara..." />
        </Menu.Item>
        {isAuthenticated ? (
          <SignedIn signOut={handleSignOut} />
        ) : (
          <SignedOut signIn={handleSignIn} />
        )}
      </Menu>
    </div>
  );
}
