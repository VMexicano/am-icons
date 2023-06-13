import React from 'react';
import CouponTagCupon_ from './../Icons/couponTagCupon.svg';
const CouponTagCupon = (props) => {
  return (
    <img src={CouponTagCupon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CouponTagCupon;
