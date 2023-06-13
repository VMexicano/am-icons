import React from 'react';
import FaresBaggage_ from './../Icons/faresBaggage.svg';
const FaresBaggage = (props) => {
  return (
    <img src={FaresBaggage_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresBaggage;
