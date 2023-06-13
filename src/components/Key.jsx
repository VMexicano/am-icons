import React from 'react';
import Key_ from './../Icons/key.svg';
const Key = (props) => {
  return (
    <img src={Key_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Key;
