import React from 'react';
import BagTag_ from './../Icons/bagTag.svg';
const BagTag = (props) => {
  return (
    <img src={BagTag_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BagTag;
