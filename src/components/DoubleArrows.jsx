import React from 'react';
import DoubleArrows_ from './../Icons/doubleArrows.svg';
const DoubleArrows = (props) => {
  return (
    <img src={DoubleArrows_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DoubleArrows;
