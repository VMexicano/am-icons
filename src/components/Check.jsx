import React from 'react';
import Check_ from './../Icons/check.svg';
const Check = (props) => {
  return (
    <img src={Check_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Check;
