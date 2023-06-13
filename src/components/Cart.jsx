import React from 'react';
import Cart_ from './../Icons/cart.svg';
const Cart = (props) => {
  return (
    <img src={Cart_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cart;
