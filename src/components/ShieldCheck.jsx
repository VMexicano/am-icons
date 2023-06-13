import React from 'react';
import ShieldCheck_ from './../Icons/shieldCheck.svg';
const ShieldCheck = (props) => {
  return (
    <img src={ShieldCheck_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ShieldCheck;
