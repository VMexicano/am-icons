import React from 'react';
import ShoppingCartFull_ from './../Icons/shoppingCartFull.svg';
const ShoppingCartFull = (props) => {
  return (
    <img src={ShoppingCartFull_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ShoppingCartFull;
