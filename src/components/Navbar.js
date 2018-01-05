import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavbarMobile extends Component {
  render() {
    return (
      <Navbar id="navbarMobile">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home" id="navbarTitle">Annie Lou's</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown eventKey={1} title="&#9776;" id="basic-nav-dropdown">
            <LinkContainer exact to="/"><MenuItem>Home</MenuItem></LinkContainer>
            <LinkContainer to="/about"><MenuItem>About Us</MenuItem></LinkContainer>
            <LinkContainer to="/rates"><MenuItem>Our Rates</MenuItem></LinkContainer>
            <LinkContainer to="/customers"><MenuItem>Our Happy Customers</MenuItem></LinkContainer>
            <LinkContainer to="/legal"><MenuItem>Legal</MenuItem></LinkContainer>
            <LinkContainer to="/faq"><MenuItem>FAQ</MenuItem></LinkContainer>
            <LinkContainer to="/contact"><MenuItem>Contact Us</MenuItem></LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default NavbarMobile;