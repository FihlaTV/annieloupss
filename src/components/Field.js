// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Stateless component / Functional component
const Field = function(props) {
  if (props.label != 'Message') {
    return (
      <div>
        <label className="inputBoxLabel">{props.label}: </label>
        <input 
          className="inputBox"
          onChange={props.onChange}
          type='text'
          value={props.value}
        />
      </div>
    )
  } else {
    return(
      <div>
        <label className="textareaBoxLabel">{props.label}: </label>
        <textarea 
          className="textareaBox"
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
  value: PropTypes.string.isRequired,
};

export default Field;