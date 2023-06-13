import React from 'react';
import ShoppingCart2_ from './../Icons/shoppingCart2.svg';
const ShoppingCart2 = (props) => {
  return (
    <img src={ShoppingCart2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ShoppingCart2;
