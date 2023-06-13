import React from 'react';
import PriorityBoarding_ from './../Icons/priorityBoarding.svg';
const PriorityBoarding = (props) => {
  return (
    <img src={PriorityBoarding_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PriorityBoarding;
