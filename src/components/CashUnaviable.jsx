import React from 'react';
import CashUnaviable_ from './../Icons/cashUnaviable.svg';
const CashUnaviable = (props) => {
  return (
    <img src={CashUnaviable_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CashUnaviable;
