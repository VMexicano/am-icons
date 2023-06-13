import React from 'react';
import SeatOutline_ from './../Icons/seatOutline.svg';
const SeatOutline = (props) => {
  return (
    <img src={SeatOutline_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatOutline;
