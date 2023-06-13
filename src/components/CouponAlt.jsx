import React from 'react';
import CouponAlt_ from './../Icons/couponAlt.svg';
const CouponAlt = (props) => {
  return (
    <img src={CouponAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CouponAlt;
