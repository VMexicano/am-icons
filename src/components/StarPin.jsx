import React from 'react';
import StarPin_ from './../Icons/starPin.svg';
const StarPin = (props) => {
  return (
    <img src={StarPin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StarPin;
