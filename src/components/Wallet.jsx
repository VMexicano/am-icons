import React from 'react';
import Wallet_ from './../Icons/wallet.svg';
const Wallet = (props) => {
  return (
    <img src={Wallet_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Wallet;
