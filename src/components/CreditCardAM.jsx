import React from 'react';
import CreditCardAM_ from './../Icons/creditCardAM.svg';
const CreditCardAM = (props) => {
  return (
    <img src={CreditCardAM_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CreditCardAM;
