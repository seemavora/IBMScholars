import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "./navbar.css";
import logo from "./footprint.png";

const UserNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [styled, setIsStyled] = useState("yellow");

  const toggle = () => setIsOpen(!isOpen);
  const changeStyle = () => {
    if (styled === "yellow") {
      setIsStyled("purple");
    } else {
      setIsStyled("yellow");
    }
  };

  return (
    <div barColor={styled} className="user-navbar">
      <Navbar light expand="md">
        <NavbarBrand className="nav-brand" id="nav-brand" href="/">
          EPIC Education
          <img id="logo-image" src={logo} alt={"bse logo"} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto d-flex align-items-end ibm-nav" navbar>
            <NavItem>
              <NavLink
                onClick={() => changeStyle()}
                id="user-item"
                className="user-item"
                href="#"
              >
                Color
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle id="user-item" className="user-item" nav caret>
                Activities
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="drp-item" href="#">
                  ADHD
                </DropdownItem>
                <DropdownItem className="drp-item" href="#">
                  Autism
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink id="user-item" className="user-item" href="#">
                Rewards
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle id="user-item" className="user-item" nav caret>
                Join Us!
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="drp-item" href="#">
                  Sign Up
                </DropdownItem>
                <DropdownItem className="drp-item" href="#">
                  Login
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default UserNavbar;