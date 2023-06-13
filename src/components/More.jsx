import React from 'react';
import More_ from './../Icons/more.svg';
const More = (props) => {
  return (
    <img src={More_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default More;
