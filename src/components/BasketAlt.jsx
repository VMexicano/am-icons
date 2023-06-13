import React from 'react';
import BasketAlt_ from './../Icons/basketAlt.svg';
const BasketAlt = (props) => {
  return (
    <img src={BasketAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BasketAlt;
