import React, { Component } from 'react';

class Faq extends Component {
  render() {
    return (
      <div className="content faq">
        <h1>Frequently Asked Questions</h1>
        <br/>
        <p>We try to anticipate questions you might have about our service and provide the answers here. If you need additional information send email to annieloupss@yahoo.com</p>
        <ol>
          <li>How much notice do you have to give to book a reservation?</li>
          <ul>
            <li>Typically we would like to have 2 weeks notice before a booking especially during the busy seasons, but we will try our best to accomodate you.</li>
          </ul>
          <li>When is payment due for services?</li>
          <ul>
            <li>We require a deposit for half the total of the service prior to your reservation date.  Making a deposit will ensure your reservation and deposits are always welcome during the consultation visit. We will accept payment for the remaining amount 5 days after your return.  We require a credit card on file and can bill you on the 5th day. We accept cash, check and credit cards.</li>
          </ul>
          <li>What if there is inclement weather? Will my pets be taken care of?</li>
          <ul>
            <li>Yes, we will make every effort to make sure your babies are taken care of.  We ask that you have a secondary contact with a key (ex. a neighbor) in case of emergencies.</li>
          </ul>
          <li>What if I need to cancel my reservation?</li>
          <ul>
            <li>You can cancel and receive a full refund on your deposit if you notify us 7 days prior to your reservation date.  If you cancel 1-6 days before your reservation, you will be assessed a $50 fee.</li>
          </ul>
          <li>Can I call to check up on my pet?</li>
          <ul>
            <li>Yes, absolutely! We can also send you a text message or email at the end of each day letting you know how your baby is doing. When you return, there will be a "Pawgress Report" waiting for you.</li>
          </ul>
          <li>What if my pet gets sick and needs medical attention?</li>
          <ul>
            <li>There is a medical waiver form that will be on file for your pet.  If we feel your pet needs medical attention we will make every effort to contact you first, then if need be, take them to your vet.</li>
          </ul>
        </ol>


      </div>
    );
  }
}

export default Faq;
