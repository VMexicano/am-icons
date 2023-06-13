import React from 'react';
import Motrobike_ from './../Icons/motrobike.svg';
const Motrobike = (props) => {
  return (
    <img src={Motrobike_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Motrobike;
