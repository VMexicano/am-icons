import React from 'react';
import SeatRecline_ from './../Icons/seatRecline.svg';
const SeatRecline = (props) => {
  return (
    <img src={SeatRecline_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatRecline;
