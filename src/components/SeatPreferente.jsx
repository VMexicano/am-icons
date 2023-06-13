import React from 'react';
import SeatPreferente_ from './../Icons/seatPreferente.svg';
const SeatPreferente = (props) => {
  return (
    <img src={SeatPreferente_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatPreferente;
