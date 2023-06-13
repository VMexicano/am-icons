import React from 'react';
import Cupon_ from './../Icons/cupon.svg';
const Cupon = (props) => {
  return (
    <img src={Cupon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cupon;
