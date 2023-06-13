import React from 'react';
import WalletBitcoin_ from './../Icons/walletBitcoin.svg';
const WalletBitcoin = (props) => {
  return (
    <img src={WalletBitcoin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WalletBitcoin;
