import React from 'react';
import SeatIconPreferred_ from './../Icons/seatIconPreferred.svg';
const SeatIconPreferred = (props) => {
  return (
    <img src={SeatIconPreferred_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatIconPreferred;
