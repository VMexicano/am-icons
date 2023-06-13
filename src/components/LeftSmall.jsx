import React from 'react';
import LeftSmall_ from './../Icons/leftSmall.svg';
const LeftSmall = (props) => {
  return (
    <img src={LeftSmall_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LeftSmall;
