import React from 'react';
import Bermuda_ from './../Icons/bermuda.svg';
const Bermuda = (props) => {
  return (
    <img src={Bermuda_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bermuda;
