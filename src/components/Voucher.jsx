import React from 'react';
import Voucher_ from './../Icons/voucher.svg';
const Voucher = (props) => {
  return (
    <img src={Voucher_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Voucher;
