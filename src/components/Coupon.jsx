import React from 'react';
import Coupon_ from './../Icons/coupon.svg';
const Coupon = (props) => {
  return (
    <img src={Coupon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Coupon;
