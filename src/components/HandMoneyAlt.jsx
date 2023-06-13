import React from 'react';
import HandMoneyAlt_ from './../Icons/handMoneyAlt.svg';
const HandMoneyAlt = (props) => {
  return (
    <img src={HandMoneyAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HandMoneyAlt;
