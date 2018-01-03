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
    		  <LinkContainer to="/"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
    		  <LinkContainer to="/about"><NavItem eventKey={2}>About Us</NavItem></LinkContainer>
    		  <LinkContainer to="/rates"><NavItem eventKey={3}>Our Rates</NavItem></LinkContainer>
      	  <LinkContainer to="/customers"><NavItem eventKey={4}>Our Happy Customers</NavItem></LinkContainer>
  		    <LinkContainer to="/legal"><NavItem eventKey={5}>Legal</NavItem></LinkContainer>
      	  <LinkContainer to="/faq"><NavItem eventKey={6}>FAQ</NavItem></LinkContainer>
      	  <LinkContainer to="/contact"><NavItem eventKey={7}>Contact Us</NavItem></LinkContainer>
    		</Nav>
      </div>
    );
  }
}

export default Navigation;