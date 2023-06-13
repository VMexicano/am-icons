import React from 'react';
import LeftArrow_ from './../Icons/leftArrow.svg';
const LeftArrow = (props) => {
  return (
    <img src={LeftArrow_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LeftArrow;
