import React from 'react';
import HandCoin_ from './../Icons/handCoin.svg';
const HandCoin = (props) => {
  return (
    <img src={HandCoin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HandCoin;
