import React from 'react';
import HotPot_ from './../Icons/hotPot.svg';
const HotPot = (props) => {
  return (
    <img src={HotPot_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HotPot;
