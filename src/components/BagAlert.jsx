import React from 'react';
import BagAlert_ from './../Icons/bagAlert.svg';
const BagAlert = (props) => {
  return (
    <img src={BagAlert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BagAlert;
