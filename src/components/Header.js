import React, { Component } from 'react';
import { 
  Image,
  Grid,
  Row,
  Col } from 'react-bootstrap';
import puppy_banner from "../img/puppy_banner.png"

class Header extends Component {
  render() {
    return (
      <div>
        <Image src={puppy_banner} className="puppy_banner" alt="AnnieLouBanner" responsive/>
        <h1 className="Header">Annie Lou's <span id="main-sub-header">Pet Sitting Service</span></h1>
        <hr/>
      </div>
    );
  }
}

export default Header;
