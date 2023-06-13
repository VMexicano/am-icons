import React from 'react';
import PisaTower_ from './../Icons/pisaTower.svg';
const PisaTower = (props) => {
  return (
    <img src={PisaTower_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PisaTower;
