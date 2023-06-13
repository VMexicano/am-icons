import React from 'react';
import Knife_ from './../Icons/knife.svg';
const Knife = (props) => {
  return (
    <img src={Knife_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Knife;
