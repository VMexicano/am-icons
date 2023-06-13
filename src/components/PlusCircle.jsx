import React from 'react';
import PlusCircle_ from './../Icons/plusCircle.svg';
const PlusCircle = (props) => {
  return (
    <img src={PlusCircle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlusCircle;
