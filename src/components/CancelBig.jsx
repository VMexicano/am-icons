import React from 'react';
import CancelBig_ from './../Icons/cancelBig.svg';
const CancelBig = (props) => {
  return (
    <img src={CancelBig_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CancelBig;
