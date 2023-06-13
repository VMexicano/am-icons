import React from 'react';
import CoinsAndBills_ from './../Icons/coinsAndBills.svg';
const CoinsAndBills = (props) => {
  return (
    <img src={CoinsAndBills_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CoinsAndBills;
