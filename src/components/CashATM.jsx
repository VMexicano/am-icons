import React from 'react';
import CashATM_ from './../Icons/cashATM.svg';
const CashATM = (props) => {
  return (
    <img src={CashATM_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CashATM;
