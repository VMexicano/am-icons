import React from 'react';
import GranPlan_ from './../Icons/granPlan.svg';
const GranPlan = (props) => {
  return (
    <img src={GranPlan_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default GranPlan;
