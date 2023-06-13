import React from 'react';
import SignalWaves_ from './../Icons/signalWaves.svg';
const SignalWaves = (props) => {
  return (
    <img src={SignalWaves_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SignalWaves;
