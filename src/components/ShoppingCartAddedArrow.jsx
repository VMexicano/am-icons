import React from 'react';
import ShoppingCartAddedArrow_ from './../Icons/shoppingCartAddedArrow.svg';
const ShoppingCartAddedArrow = (props) => {
  return (
    <img src={ShoppingCartAddedArrow_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ShoppingCartAddedArrow;
