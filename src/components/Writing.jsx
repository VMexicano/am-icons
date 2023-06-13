import React from 'react';
import Writing_ from './../Icons/writing.svg';
const Writing = (props) => {
  return (
    <img src={Writing_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Writing;
