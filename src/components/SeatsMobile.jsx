import React from 'react';
import SeatsMobile_ from './../Icons/seatsMobile.svg';
const SeatsMobile = (props) => {
  return (
    <img src={SeatsMobile_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatsMobile;
