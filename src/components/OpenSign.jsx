import React from 'react';
import OpenSign_ from './../Icons/openSign.svg';
const OpenSign = (props) => {
  return (
    <img src={OpenSign_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default OpenSign;
