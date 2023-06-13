import React from 'react';
import Rio_ from './../Icons/rio.svg';
const Rio = (props) => {
  return (
    <img src={Rio_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Rio;
