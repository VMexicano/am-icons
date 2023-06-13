import React from 'react';
import SeatPremierLight_ from './../Icons/seatPremierLight.svg';
const SeatPremierLight = (props) => {
  return (
    <img src={SeatPremierLight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatPremierLight;
