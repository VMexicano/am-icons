import React from 'react';
import SeatsBaggageAlert_ from './../Icons/seatsBaggageAlert.svg';
const SeatsBaggageAlert = (props) => {
  return (
    <img src={SeatsBaggageAlert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatsBaggageAlert;
