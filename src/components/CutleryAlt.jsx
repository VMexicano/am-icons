import React from 'react';
import CutleryAlt_ from './../Icons/cutleryAlt.svg';
const CutleryAlt = (props) => {
  return (
    <img src={CutleryAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CutleryAlt;
