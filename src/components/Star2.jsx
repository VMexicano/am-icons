import React from 'react';
import Star2_ from './../Icons/star2.svg';
const Star2 = (props) => {
  return (
    <img src={Star2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Star2;
