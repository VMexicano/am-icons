import React from 'react';
import UATP_ from './../Icons/uATP.svg';
const UATP = (props) => {
  return (
    <img src={UATP_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UATP;
