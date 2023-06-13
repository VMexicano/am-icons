import React from 'react';
import RightBig_ from './../Icons/rightBig.svg';
const RightBig = (props) => {
  return (
    <img src={RightBig_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RightBig;
