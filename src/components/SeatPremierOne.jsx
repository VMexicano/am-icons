import React from 'react';
import SeatPremierOne_ from './../Icons/seatPremierOne.svg';
const SeatPremierOne = (props) => {
  return (
    <img src={SeatPremierOne_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatPremierOne;
