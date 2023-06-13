import React from 'react';
import Bonfire_ from './../Icons/bonfire.svg';
const Bonfire = (props) => {
  return (
    <img src={Bonfire_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bonfire;
