import React, { Component } from 'react';

class Rates extends Component {
  render() {
    return (
      <div className="content rates">
        <h1>Our Rates</h1>
        <hr/>
 
        <h2>Pet Sitting</h2>
        <h4>All visits include potty break, feedings, water change, love, and playtime.</h4>
        <p>$30 -  per day for 1 dog (up to 3 visits)</p>
        <p>$40 -  per day for 2-3 dogs (up to 3 visits)</p>
        <p>$5 additional charge for 4 or more dogs.</p>
     
        <p>Prices may be customized depending of the geographical location and any particular needs.</p>
        <p>Prices can be adjusted for pets other than dogs.</p>
        
        <hr/>

        <h2>Optional Services</h2>
          <p>Dog walking - $5 per day</p>
          <p>Transportation to vet/groomer - $20 plus mileage</p>
          <p>Wait time at vet/groomer - $10 per hour</p>
          <p>Poop pick up/ ptter box clean up - one time $10 fee</p>
          <p>Dog bath - up to $25 pounds - $10</p>
          <p>Dog bath - 25+ pounds - $25</p>
          <p>Key return by mail - $5</p>
          <p>Bring in mail, newspapers, turning lights off/on - FREE</p>
      </div>
    );
  }
}

export default Rates;
