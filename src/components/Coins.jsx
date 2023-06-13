import React from 'react';
import Coins_ from './../Icons/coins.svg';
const Coins = (props) => {
  return (
    <img src={Coins_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Coins;
