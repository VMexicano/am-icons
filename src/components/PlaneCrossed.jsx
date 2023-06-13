import React from 'react';
import PlaneCrossed_ from './../Icons/planeCrossed.svg';
const PlaneCrossed = (props) => {
  return (
    <img src={PlaneCrossed_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlaneCrossed;
