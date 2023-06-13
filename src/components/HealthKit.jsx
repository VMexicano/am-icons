import React from 'react';
import HealthKit_ from './../Icons/healthKit.svg';
const HealthKit = (props) => {
  return (
    <img src={HealthKit_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HealthKit;
