import React from 'react';
import DivergentArrows_ from './../Icons/divergentArrows.svg';
const DivergentArrows = (props) => {
  return (
    <img src={DivergentArrows_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DivergentArrows;
