import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
  Form.propTypes = {
    onWeightSubmit: PropTypes.func.isRequired,
  };
  const { onWeightSubmit } = props;
  return (
    <form id="weightForm" onSubmit={(e) => onWeightSubmit(e)}>
      <label htmlFor="weight">
        Weight (in pounds):
        <br />
        <input type="number" id="weight" name="weight" step="0.01" min="1" />
      </label>
      <button type="submit" value="Submit">Submit</button>
    </form>
  );
};

export default Form;
