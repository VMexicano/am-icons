import React from 'react';
import DiscountPass_ from './../Icons/discountPass.svg';
const DiscountPass = (props) => {
  return (
    <img src={DiscountPass_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DiscountPass;
