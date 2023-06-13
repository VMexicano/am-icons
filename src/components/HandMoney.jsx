import React from 'react';
import HandMoney_ from './../Icons/handMoney.svg';
const HandMoney = (props) => {
  return (
    <img src={HandMoney_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HandMoney;
