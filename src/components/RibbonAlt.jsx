import React from 'react';
import RibbonAlt_ from './../Icons/ribbonAlt.svg';
const RibbonAlt = (props) => {
  return (
    <img src={RibbonAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RibbonAlt;
