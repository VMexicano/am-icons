import React from 'react';
import Basket_ from './../Icons/basket.svg';
const Basket = (props) => {
  return (
    <img src={Basket_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Basket;
