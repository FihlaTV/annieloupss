import React, { Component } from 'react';
import {
  Table
  } from 'react-bootstrap';

class Rates extends Component {
  render() {
    return (
      <div className="content rates">
        <h1>Our Rates</h1>
        <br/>
        <h2>Pet Sitting</h2>
        <Table striped className="table-responsive">
		      <thead>
			       <tr>
				       <th>Service</th>
				       <th>Rate</th>
			       </tr>
		      </thead>
		      <tbody>
      			<tr>
      				<td>Daily visit for one dog (up to 3 visits)</td>
      				<td>$30 per day</td>
      			</tr>
      			<tr>
      				<td>Daily visit for 2-3 dogs (up to 3 visits)</td>
      				<td>$40 per day</td>
      			</tr>
            <tr>
      				<td>$5 additional charge per dog for 4 or more dogs.</td>
              <td></td>
      			</tr>
            <tr>
      				<td><br/>Prices may be customized depending of the geographical location and any particular needs.
              <br/>
              <br/>
              <p>Prices can be adjusted for pets other than dogs.</p></td>
      			</tr>
      		</tbody>
      	</Table>
        <hr/>
          <br/>
        <h2>Optional Services</h2>
          <br/>
          <Table striped className="table-responsive">
		      <thead>
			       <tr>
				       <th>Service</th>
				       <th>Rate</th>
			       </tr>
		      </thead>
		      <tbody>
      			<tr>
      				<td>Dog Walking</td>
      				<td>$5 per day</td>
      			</tr>
      			<tr>
      				<td>Transportation to vet/groomer</td>
      				<td>$20 plus mileage</td>
      			</tr>
            <tr>
              <td>Wait time at vet/groomer</td>
              <td>$10 per hour</td>
            </tr>
            <tr>
              <td>Poop pick up/ ptter box clean up</td>
              <td>$10 (One time fee)</td>
            </tr>
            <tr>
              <td>Dog bath(up to 25 pounds)</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>Dog bath(over pounds)</td>
              <td>$25</td>
            </tr>
            <tr>
              <td>Key return by mail</td>
              <td>$5</td>
            </tr>
            <tr>
              <td>Bring in mail, newspapers, turning lights off/on</td>
              <td>FREE</td>
            </tr>
      		</tbody>
      	</Table>
      </div>
    );
  }
}

export default Rates;
