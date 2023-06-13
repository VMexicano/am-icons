import React from 'react';
import BagsChecked_ from './../Icons/bagsChecked.svg';
const BagsChecked = (props) => {
  return (
    <img src={BagsChecked_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BagsChecked;
