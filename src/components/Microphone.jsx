import React from 'react';
import Microphone_ from './../Icons/microphone.svg';
const Microphone = (props) => {
  return (
    <img src={Microphone_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Microphone;
