import React from 'react';
import PropTypes from 'prop-types';
import WeightListItem from './WeightListItem';

const WeightList = (props) => {
  WeightList.propTypes = { weightList: PropTypes.arrayOf(PropTypes.object).isRequired };
  const { weightList } = props;
  return (
    <ul>
      {weightList.map((weightObj) => <WeightListItem key={weightObj.time} data={weightObj} />)}
    </ul>
  );
};

export default WeightList;
