import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom'

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
        <Nav bsStyle="pills" stacked onSelect={this.handleSelect}>
		  <NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
		  <NavItem eventKey={2}><Link to="/about">About Us</Link></NavItem>
		  <NavItem eventKey={3}><Link to="/rates">Our Rates</Link></NavItem>
    	  <NavItem eventKey={4}><Link to="/customers">Our Happy Customers</Link></NavItem>
		  <NavItem eventKey={5}><Link to="/legal">Legal</Link></NavItem>
    	  <NavItem eventKey={6}><Link to="/faq">Frequently Asked Questions</Link></NavItem>
    	  <NavItem eventKey={7}><Link to="/contact">Contact Us</Link></NavItem>
  		</Nav>
      </div>
    );
  }
}

export default Navigation;