import React from 'react';
import KEI_ from './../Icons/kEI.svg';
const KEI = (props) => {
  return (
    <img src={KEI_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default KEI;
