import React from 'react';
import Padlock_ from './../Icons/padlock.svg';
const Padlock = (props) => {
  return (
    <img src={Padlock_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Padlock;
