import React from 'react';
import CpModalError_ from './../Icons/cpModalError.svg';
const CpModalError = (props) => {
  return (
    <img src={CpModalError_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CpModalError;
