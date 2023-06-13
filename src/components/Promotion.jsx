import React from 'react';
import Promotion_ from './../Icons/promotion.svg';
const Promotion = (props) => {
  return (
    <img src={Promotion_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Promotion;
