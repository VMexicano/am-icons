import React from 'react';
import Beach_ from './../Icons/beach.svg';
const Beach = (props) => {
  return (
    <img src={Beach_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Beach;
