import React from 'react';
import FaresFleet_ from './../Icons/faresFleet.svg';
const FaresFleet = (props) => {
  return (
    <img src={FaresFleet_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresFleet;
