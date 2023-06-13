import React from 'react';
import Damaged_ from './../Icons/damaged.svg';
const Damaged = (props) => {
  return (
    <img src={Damaged_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Damaged;
