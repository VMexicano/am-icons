import React from 'react';
import CarBubble_ from './../Icons/carBubble.svg';
const CarBubble = (props) => {
  return (
    <img src={CarBubble_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CarBubble;
