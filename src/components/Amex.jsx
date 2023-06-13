import React from 'react';
import Amex_ from './../Icons/amex.svg';
const Amex = (props) => {
  return (
    <img src={Amex_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Amex;
