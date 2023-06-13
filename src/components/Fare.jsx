import React from 'react';
import Fare_ from './../Icons/fare.svg';
const Fare = (props) => {
  return (
    <img src={Fare_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Fare;
