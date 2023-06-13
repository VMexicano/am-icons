import React from 'react';
import FutbolSoccer_ from './../Icons/futbolSoccer.svg';
const FutbolSoccer = (props) => {
  return (
    <img src={FutbolSoccer_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FutbolSoccer;
