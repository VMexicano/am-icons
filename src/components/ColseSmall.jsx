import React from 'react';
import ColseSmall_ from './../Icons/colseSmall.svg';
const ColseSmall = (props) => {
  return (
    <img src={ColseSmall_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ColseSmall;
