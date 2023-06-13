import React from 'react';
import Star4_ from './../Icons/star4.svg';
const Star4 = (props) => {
  return (
    <img src={Star4_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Star4;
