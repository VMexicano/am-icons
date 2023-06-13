import React from 'react';
import CashAlt_ from './../Icons/cashAlt.svg';
const CashAlt = (props) => {
  return (
    <img src={CashAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CashAlt;
