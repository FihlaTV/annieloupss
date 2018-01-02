import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Nav';
import Home from './components/Home';
import Legal from './components/Legal';
import Faq from './components/Faqs';
import Customers from './components/Customers';
import Contact from './components/Contact';
import Rates from './components/Rates';
import About from './components/About';
import Footer from './components/Footer';
import { 
  Grid,
  Row,
  Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
	      <Grid className="App">
	      	<Row>
	      		<Header/>
	      	</Row>
	      	<Row>
	      		<Col md={3}>
	      			<Navigation/>
	      		</Col>
	      		<Col md={9}>
	      			<Route exact path="/" component={Home}/>
				    <Route path="/legal" component={Legal}/>
				    <Route path="/faq" component={Faq}/>
				    <Route path="/customers" component={Customers}/>
				    <Route path="/contact" component={Contact}/>
				    <Route path="/rates" component={Rates}/>
				    <Route path="/about" component={About}/>
	      		</Col>
	      	</Row>
	      	<Row>
	      		<Footer />
	      	</Row>
	      </Grid>
	  </Router>
    );
  }
}

export default App;
