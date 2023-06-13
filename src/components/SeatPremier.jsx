import React from 'react';
import SeatPremier_ from './../Icons/seatPremier.svg';
const SeatPremier = (props) => {
  return (
    <img src={SeatPremier_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatPremier;
