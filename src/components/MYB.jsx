import React from 'react';
import MYB_ from './../Icons/mYB.svg';
const MYB = (props) => {
  return (
    <img src={MYB_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MYB;
