import React from 'react';
import OpenTrash_ from './../Icons/openTrash.svg';
const OpenTrash = (props) => {
  return (
    <img src={OpenTrash_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default OpenTrash;
