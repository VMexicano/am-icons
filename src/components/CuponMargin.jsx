import React from 'react';
import CuponMargin_ from './../Icons/cuponMargin.svg';
const CuponMargin = (props) => {
  return (
    <img src={CuponMargin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CuponMargin;
