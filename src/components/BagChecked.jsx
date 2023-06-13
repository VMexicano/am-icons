import React from 'react';
import BagChecked_ from './../Icons/bagChecked.svg';
const BagChecked = (props) => {
  return (
    <img src={BagChecked_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BagChecked;
