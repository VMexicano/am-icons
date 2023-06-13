import React from 'react';
import Steak_ from './../Icons/steak.svg';
const Steak = (props) => {
  return (
    <img src={Steak_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Steak;
