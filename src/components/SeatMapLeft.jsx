import React from 'react';
import SeatMapLeft_ from './../Icons/seatMapLeft.svg';
const SeatMapLeft = (props) => {
  return (
    <img src={SeatMapLeft_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatMapLeft;
