import React from 'react';
import Handshake_ from './../Icons/handshake.svg';
const Handshake = (props) => {
  return (
    <img src={Handshake_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Handshake;
