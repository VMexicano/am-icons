import React from 'react';
import Heart_ from './../Icons/heart.svg';
const Heart = (props) => {
  return (
    <img src={Heart_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Heart;
