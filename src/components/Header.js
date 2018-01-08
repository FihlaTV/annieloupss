import React, { Component } from 'react';
import { 
  Grid,
  Row,
  Col } from 'react-bootstrap';
import puppy_banner from "../img/puppy_banner.png"

class Header extends Component {
  render() {
    return (
      <div>
        <img src={puppy_banner} className="puppy_banner img-fluid" alt="AnnieLouBanner"/>
        <h1 className="Header">Annie Lou's Pet Sitting Service</h1>
        <hr/>
      </div>
    );
  }
}

export default Header;
