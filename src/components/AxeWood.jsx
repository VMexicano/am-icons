import React from 'react';
import AxeWood_ from './../Icons/axeWood.svg';
const AxeWood = (props) => {
  return (
    <img src={AxeWood_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AxeWood;
