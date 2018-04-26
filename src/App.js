import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Nav';
import NavbarMobile from './components/Navbar';
import Home from './components/Home';
import Legal from './components/Legal';
import Faq from './components/Faqs';
import Customers from './components/Customers';
import Contact from './components/Contact';
import Rates from './components/Rates';
import About from './components/About';
import Footer from './components/Footer';
import "typeface-arapey";
import "typeface-vidaloka";
import {
  Grid,
  Row,
  Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
	      <Grid className="App">
          <Row>
            <NavbarMobile/>
          </Row>
	      	<Row>
	      		<Col md={2} className="sideNavColumn">
	      			<Navigation/>
	      		</Col>
	      		<Col md={10} sm={12} className="contentColumn">
              <Header/>
	      			<Route exact path="/" component={Home}/>
  				    <Route path="/legal" component={Legal}/>
  				    <Route path="/faq" component={Faq}/>
  				    <Route path="/customers" component={Customers}/>
  				    <Route path="/contact" component={Contact}/>
  				    <Route path="/rates" component={Rates}/>
  				    <Route path="/about" component={About}/>
              <Footer />
	      		</Col>
	      	</Row>
	      </Grid>
	  </Router>
    );
  }
}

export default App;
