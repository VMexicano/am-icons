import React from 'react';
import AmPlus_ from './../Icons/amPlus.svg';
const AmPlus = (props) => {
  return (
    <img src={AmPlus_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmPlus;
