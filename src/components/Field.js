// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Stateless component / Functional component
const Field = function(props) {
  if (props.label != 'Message') {
    return (
      <div>
        <label>{props.label}: </label>
        <input 
          onChange={props.onChange}
          type='text'
          value={props.value}
        />
      </div>
    )
  } else {
    return(
      <div>
        <label>{props.label}: </label>
        <textarea 
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    )
  }
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textarea: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;