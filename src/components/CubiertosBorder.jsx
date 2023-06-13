import React from 'react';
import CubiertosBorder_ from './../Icons/cubiertosBorder.svg';
const CubiertosBorder = (props) => {
  return (
    <img src={CubiertosBorder_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CubiertosBorder;
