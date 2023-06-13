import React from 'react';
import LeftBig_ from './../Icons/leftBig.svg';
const LeftBig = (props) => {
  return (
    <img src={LeftBig_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LeftBig;
