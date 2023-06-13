import React from 'react';
import Cart2_ from './../Icons/cart2.svg';
const Cart2 = (props) => {
  return (
    <img src={Cart2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cart2;
