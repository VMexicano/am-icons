import React from 'react';
import Apple_ from './../Icons/apple.svg';
const Apple = (props) => {
  return (
    <img src={Apple_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Apple;
