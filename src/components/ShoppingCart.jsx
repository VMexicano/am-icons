import React from 'react';
import ShoppingCart_ from './../Icons/shoppingCart.svg';
const ShoppingCart = (props) => {
  return (
    <img src={ShoppingCart_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ShoppingCart;
