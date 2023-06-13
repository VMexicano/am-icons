import React from 'react';
import AirCondition_ from './../Icons/airCondition.svg';
const AirCondition = (props) => {
  return (
    <img src={AirCondition_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AirCondition;
