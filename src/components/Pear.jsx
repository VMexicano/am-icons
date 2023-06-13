import React from 'react';
import Pear_ from './../Icons/pear.svg';
const Pear = (props) => {
  return (
    <img src={Pear_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Pear;
