import React from 'react';
import Copy_ from './../Icons/copy.svg';
const Copy = (props) => {
  return (
    <img src={Copy_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Copy;
