import React, { Component } from 'react';
import { 
  Grid,
  Row,
  Col } from 'react-bootstrap';
  import pikaprofile from "../img/pikaprofile.jpg"


class About extends Component {
  render() {
    return (
      <div className="content about">
        <h1>Meet Your New Sitters!</h1>
        <br/>
        <Row>
          <Col xs={12} md={6}>
            <img src={pikaprofile} className="img-thumbnail" alt="Laura"/>
            <br/>
            <p>"I have been an animal lover my whole life. For over twenty years I have had numerous animals including dogs, cats, rabbits, turtles and fish. My life isn't complete unless I am taking care of animals.  Now I have the chance to take care of other animals and am thrilled at the opportunity.  I presently have three Border Collies who are Red Cross Therapy Dogs. We visit patients at the University of Louisville Hospital and the Wellstone in Jeffersonville.  I have a good deal of experience with dog training and still attend advanced classes every Sunday.</p>    

            <p>I look forward to meeting you and taking wonderful care of your animals while you are away. There will be no need to worry.  You will have peace of mind knowing you can contact us at anytime to check on your animals.  We can contact you every evening and give you an update. Nothing is more important than the welfare of your animals while you are away from them.</p>   

            <p>Anne and I make a great team.  We have been PTA and PTO Moms for the past 6 years and were very active in our childrens' schools.  We are passionate about our schools and you can count on us to be even more passionate about your animals. Give us a try! You will be so happy you did!</p>    

            <p>Thank you and hope to see you soon!"</p>   

            <p>Laura Zeles</p> 
          </Col> 
          <Col xs={12} md={6}>
            <img src={pikaprofile} className="img-thumbnail" alt="Anne"/>
            <br/>
            <p>"I have had animals all my life.  I was always one of those kids who'd say, "Please , Mom! Can we keep him?"!  I have had dogs, cats, guinea pigs, rats, turtles, lizards and lots and lots of fish.  I currently have two rescue dogs and a 150 gallon fish tank with several tetra fish, angel fish, and sharks.  I've enjoyed pet sitting for relatives and friends so I recently decided to make it a business venture with my best pal, Laura.  We are a great team and both have a passion for animals.  I understand and empathize with pet owners who have special needs pets who have difficulty with boarding - not to mention the price can get extremely high.  With us, you have the luxury of leaving your pets at home and comfortable in their familiar surroundings.  We look forward to giving your pets lots of TLC and big sloppy kisses! Please give us a call!"</p>   

            <p>Anne Scherer</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
