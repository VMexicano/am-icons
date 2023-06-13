import React from 'react';
import Passenger_ from './../Icons/passenger.svg';
const Passenger = (props) => {
  return (
    <img src={Passenger_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Passenger;
