import React from 'react';
import Nato_ from './../Icons/nato.svg';
const Nato = (props) => {
  return (
    <img src={Nato_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Nato;
