import React from 'react';
import FaresDiscount_ from './../Icons/faresDiscount.svg';
const FaresDiscount = (props) => {
  return (
    <img src={FaresDiscount_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresDiscount;
