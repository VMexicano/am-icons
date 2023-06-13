import React from 'react';
import PlusAddd_ from './../Icons/plusAddd.svg';
const PlusAddd = (props) => {
  return (
    <img src={PlusAddd_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlusAddd;
