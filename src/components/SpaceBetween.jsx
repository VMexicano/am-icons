import React from 'react';
import SpaceBetween_ from './../Icons/spaceBetween.svg';
const SpaceBetween = (props) => {
  return (
    <img src={SpaceBetween_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SpaceBetween;
