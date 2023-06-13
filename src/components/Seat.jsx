import React from 'react';
import Seat_ from './../Icons/seat.svg';
const Seat = (props) => {
  return (
    <img src={Seat_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Seat;
