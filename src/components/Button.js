import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor() {
  	super();
  	this.state = {
  	  isClicked: false,
  	};
    this.logFormDataToMailer = this.logFormDataToMailer.bind(this);
  }
  
  logFormDataToMailer(event) {
    console.log('Form Values', this.props.formValues);
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <button
      disabled={this.state.isClicked}
      onClick={this.logFormDataToConsole}
      >
        Contact us
      </button>
  	);
  }
}

Button.propTypes = {
    email: PropTypes.string.isRequired,
    formValues: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      message:  PropTypes.string.isRequired,
    }).isRequired,
  };

export default Button;