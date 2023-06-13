import React from 'react';
import SeatsMobileTaken_ from './../Icons/seatsMobileTaken.svg';
const SeatsMobileTaken = (props) => {
  return (
    <img src={SeatsMobileTaken_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatsMobileTaken;
