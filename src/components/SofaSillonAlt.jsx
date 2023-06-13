import React from 'react';
import SofaSillonAlt_ from './../Icons/sofaSillonAlt.svg';
const SofaSillonAlt = (props) => {
  return (
    <img src={SofaSillonAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SofaSillonAlt;
