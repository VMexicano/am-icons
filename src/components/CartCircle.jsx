import React from 'react';
import CartCircle_ from './../Icons/cartCircle.svg';
const CartCircle = (props) => {
  return (
    <img src={CartCircle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CartCircle;
