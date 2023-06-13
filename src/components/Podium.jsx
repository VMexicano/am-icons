import React from 'react';
import Podium_ from './../Icons/podium.svg';
const Podium = (props) => {
  return (
    <img src={Podium_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Podium;
