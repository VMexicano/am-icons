import React from 'react';
import HoneyJar_ from './../Icons/honeyJar.svg';
const HoneyJar = (props) => {
  return (
    <img src={HoneyJar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HoneyJar;
