import React from 'react';
import BridgeLondon_ from './../Icons/bridgeLondon.svg';
const BridgeLondon = (props) => {
  return (
    <img src={BridgeLondon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BridgeLondon;
