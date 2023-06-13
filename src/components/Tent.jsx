import React from 'react';
import Tent_ from './../Icons/tent.svg';
const Tent = (props) => {
  return (
    <img src={Tent_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tent;
