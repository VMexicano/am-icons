import React from 'react';
import Baggage_ from './../Icons/baggage.svg';
const Baggage = (props) => {
  return (
    <img src={Baggage_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Baggage;
