import React from 'react';
import RightArrow_ from './../Icons/rightArrow.svg';
const RightArrow = (props) => {
  return (
    <img src={RightArrow_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RightArrow;
