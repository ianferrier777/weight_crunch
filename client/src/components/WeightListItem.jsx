import React from 'react';
import PropTypes from 'prop-types';

const WeightListItem = (props) => {
  WeightListItem.propTypes = {
    data: PropTypes.shape({
      weight: PropTypes.string,
      time: PropTypes.string,
    }).isRequired,
  };
  const { data } = props;
  const { weight, time } = data;
  return (
    <li>{`${weight}lbs  ${time}`}</li>
  );
};

export default WeightListItem;
