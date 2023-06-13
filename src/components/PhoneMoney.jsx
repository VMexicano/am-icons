import React from 'react';
import PhoneMoney_ from './../Icons/phoneMoney.svg';
const PhoneMoney = (props) => {
  return (
    <img src={PhoneMoney_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PhoneMoney;
