import React from 'react';
import Hat_ from './../Icons/hat.svg';
const Hat = (props) => {
  return (
    <img src={Hat_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Hat;
