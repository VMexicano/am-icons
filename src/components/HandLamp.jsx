import React from 'react';
import HandLamp_ from './../Icons/handLamp.svg';
const HandLamp = (props) => {
  return (
    <img src={HandLamp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HandLamp;
