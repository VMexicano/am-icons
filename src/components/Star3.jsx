import React from 'react';
import Star3_ from './../Icons/star3.svg';
const Star3 = (props) => {
  return (
    <img src={Star3_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Star3;
