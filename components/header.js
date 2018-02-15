import React from 'react';
import Link from 'gatsby-link';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap';
const IndexPage = () => (
  <Navbar color="faded" light>
    <NavbarBrand href="/">Jay Dan Howard</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Link to="404">Abxout Me</Link>
      </NavItem>
      <NavItem>
        <Link to="resume">Resume</Link>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Projects
        </DropdownToggle>
      </UncontrolledDropdown>
    </Nav>
  </Navbar>
);

export default IndexPage;
