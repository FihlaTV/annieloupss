import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {
  constructor() {
  	super();
  	this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    //alert(`selected ${selectedKey}`);

  }

  render() {
    return (
      <div className="Nav">
        <Nav pullRight bsStyle="pills" stacked onSelect={this.handleSelect}>
    		  <LinkContainer exact to="/"><NavItem>Home</NavItem></LinkContainer>
    		  <LinkContainer to="/about"><NavItem>About Us</NavItem></LinkContainer>
    		  <LinkContainer to="/rates"><NavItem>Our Rates</NavItem></LinkContainer>
      	  <LinkContainer to="/customers"><NavItem>Our Happy Customers</NavItem></LinkContainer>
  		    <LinkContainer to="/legal"><NavItem>Legal</NavItem></LinkContainer>
      	  <LinkContainer to="/faq"><NavItem>FAQ</NavItem></LinkContainer>
      	  <LinkContainer to="/contact"><NavItem>Contact Us</NavItem></LinkContainer>
    		</Nav>
      </div>
    );
  }
}

export default Navigation;