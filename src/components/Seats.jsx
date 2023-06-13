import React from 'react';
import Seats_ from './../Icons/seats.svg';
const Seats = (props) => {
  return (
    <img src={Seats_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Seats;
