import React from 'react';
import SeatsMobileSelected_ from './../Icons/seatsMobileSelected.svg';
const SeatsMobileSelected = (props) => {
  return (
    <img src={SeatsMobileSelected_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatsMobileSelected;
